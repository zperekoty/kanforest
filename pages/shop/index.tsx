import { NextPage } from "next";

import { ShopPage } from "../../container";

const Shop: NextPage = ({ categories }: any): JSX.Element => {
    return (
        <>
            <ShopPage categories={categories} />
        </>
    );
};

export const getServerSideProps = async () => {
    const query = encodeURIComponent('*[_type == "categories"]');
    const url = `${process.env.NEXT_PUBLIC_URL}query=${query}`;

    const data = await fetch(url).then((res) => res.json());
    const categories = data.result;

    return {
        props: {
            categories,
        },
    };
};

export default Shop;
