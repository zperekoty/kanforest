import { Layout } from "../";
import { ISE } from "./";

const IntServerError = (): JSX.Element => {
    type tLinks = { name: string; anchor: string };

    const links: tLinks[] = [
        { name: "главная", anchor: "/" },
        { name: "магазин", anchor: "/shop" },
    ];

    return (
        <>
            <Layout
                title="Лес Каневская — Внутренняя ошибка сервера"
                desc="Внутренняя ошибка сервера | 500"
                kw=""
                links={links}
            >
                <ISE />
            </Layout>
        </>
    );
};

export default IntServerError;
