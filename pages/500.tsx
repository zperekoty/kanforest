import { NextPage } from "next";

import { IntServerError } from "../container";

const InternalServerErrorPage: NextPage = (): JSX.Element => {
    return (
        <>
            <IntServerError />
        </>
    );
};

export default InternalServerErrorPage;
