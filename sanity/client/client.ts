import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

type tClient = {
    projectId: string;
    dataset: string;
    apiVersion: string;
    useCdn: boolean;
    token: string;
};

export const client = sanityClient(<tClient>{
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-09-24",
    useCdn: true,
    token: process.env.NEXT_PUBLIC_TOKEN,
});

export const urlFor = (source: string) => imageUrlBuilder(client).image(source);

type tProducts = {
    name: string;
    description: string;
    price: string;
    categories: Array<string>;
    imgUrl: string;
};

type tCategories = {
    category: string;
};

type tThen = {
    to: React.Dispatch<React.SetStateAction<boolean>>;
    success: boolean;
};

type tQueries = {
    query: string;
    to:
        | React.Dispatch<React.SetStateAction<tProducts[]>>[]
        | React.Dispatch<React.SetStateAction<tCategories[]>>[];
};

type tDocument = {
    document: {
        _type: string;
        name: string;
        email: string;
        message: string;
    };
    then: tThen[];
};

export const clientFetch = (queries: tQueries[]): void => {
    for (let query of queries) {
        client.fetch(query.query).then((data) => {
            for (let _to of query.to) {
                _to(data);
            }
        });
    }
};

export const clientFetchVar = async (query: string): Promise<any> => {
    return client.fetch(query).then((data) => data);
};

export const clientSendMessage = (documents: tDocument[]): void => {
    for (let doc of documents) {
        client.create(doc.document).then(() => {
            for (let then of doc.then) {
                then.to(then.success);
            }
        });
    }
};
