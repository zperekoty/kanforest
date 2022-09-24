import { Layout } from "../";
import { Welcome, Map, Contacts } from "./";
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
                <Map />
                <Contacts />
            </Layout>
        </div>
    );
};

export default HomePage;
