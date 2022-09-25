import { NextPage } from "next";

import { NotFoundPage } from "../container";

const notFound: NextPage = (): JSX.Element => {
    return (
        <>
            <NotFoundPage />
        </>
    );
};

export default notFound;
