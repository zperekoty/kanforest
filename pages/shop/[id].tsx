import { ProductPage } from "../../container";

type res = {
    name: string;
    description: string;
    price: string;
    categories: Array<string>;
    imgUrl: string;
};

type Props = {
    product: res[];
};

const itemShop = ({ product }: Props): JSX.Element => {
    return (
        <>
            <ProductPage product={product} />
        </>
    );
};

export const getServerSideProps = async (context: any) => {
    const { id } = context.params;
    const query = encodeURIComponent('*[_type == "products" && _id == $id]');

    const url = `${process.env.NEXT_PUBLIC_URL}query=${query}&$id="${id}"`;

    const data = await fetch(url).then((res) => res.json());
    const product = data.result;

    return {
        props: { product },
    };
};

export default itemShop;
