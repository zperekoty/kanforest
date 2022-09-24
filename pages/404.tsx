import { NextPage } from "next";

import { NotFoundPage } from "../container/404";

const notFound: NextPage = (): JSX.Element => {
    return (
        <>
            <NotFoundPage />
        </>
    );
};

export default notFound;
