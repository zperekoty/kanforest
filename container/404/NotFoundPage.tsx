import { Layout } from "../index";
import { NF } from "./";

const NotFoundPage = (): JSX.Element => {
    type tLinks = { name: string; anchor: string };

    const links: tLinks[] = [
        { name: "главная", anchor: "/" },
        { name: "магазин", anchor: "/shop" },
    ];

    return (
        <div>
            <Layout
                title="Лес Каневская — Страница не найдена"
                desc="Страница не найдена | 404"
                kw=""
                links={links}
            >
                <NF />
            </Layout>
        </div>
    );
};

export default NotFoundPage;
