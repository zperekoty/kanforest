import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

type tClient = {
    projectId: string;
    dataset: string;
    apiVersion: string;
    useCdn: boolean;
};

export const client = sanityClient(<tClient>{
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: "production",
    apiVersion: "2022-09-24",
    useCdn: false,
});

export const urlFor: any = (source: string): ImageUrlBuilder =>
    imageUrlBuilder(client).image(source);

type tProducts = {
    name: string;
    description: string;
    price: string;
    categories: Array<string>;
    imgUrl: string;
};

type tQueries = {
    query: string;
    to: React.Dispatch<React.SetStateAction<tProducts[]>>[];
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
