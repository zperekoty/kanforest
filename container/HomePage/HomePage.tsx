import { Layout } from "../";
import { Welcome } from "./";
import { Map, Contacts } from "../../components";
import { styles } from "../../styles";

const HomePage = (): JSX.Element => {
    type tLinks = { name: string; anchor: string };

    const links: tLinks[] = [
        { name: "о нас", anchor: "#about" },
        { name: "где нас найти", anchor: "#map" },
        { name: "контакты", anchor: "#contacts" },
        { name: "магазин", anchor: "/shop" },
    ];

    return (
        <div className={styles.overflow}>
            <Layout
                title="Лес Каневская — Услуги строительства в станице Каневская"
                desc="Лес Каневская. Здесь вы можете узнать о нас, связаться с нами и заказать услуги строительства"
                kw="Лес, Лес Каневская, Каневская, услуги строительства, каневская услуги строительства, услуги строительства каневская, строительство каневская, каневская строительсвто"
                links={links}
            >
                <Welcome />
                <Map color={styles["app-sec-bg"]} />
                <Contacts />
            </Layout>
        </div>
    );
};

export default HomePage;
