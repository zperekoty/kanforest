import { Layout } from "../";
import { Catalogue, Payments, Delivery, Map, Contacts } from "./";
import { styles } from "../../styles";

const ShopPage = () => {
    type tLinks = { name: string; anchor: string };

    const links: tLinks[] = [
        { name: "главная", anchor: "/" },
        { name: "каталог товаров", anchor: "#catalogue" },
        { name: "способы оплаты", anchor: "#payments" },
        { name: "условия доставки", anchor: "#delivery" },
        { name: "где нас найти", anchor: "#map" },
        { name: "контакты", anchor: "#contacts" },
    ];

    return (
        <div className={styles.overflow}>
            <Layout
                title="Лес Каневская — Купить пиломатериалы в станице Каневская"
                desc="Лес Каневская. Здесь вы можете ознакомиться с каталогом пиломатериалов. Позвоните нам, чтобы заказать или уточнить наличие товара: +7 (995) 193-37-37, +7 (995) 194-37-37. Или напишите нам в WhatsApp: +7 (995) 194-37-37"
                kw="Лес, Лес Каневская, Каневская, купить лес каневская, лес каневская купить, лес купить каневская, купить лес, лес купить"
                links={links}
            >
                <Catalogue />
                <Payments />
                <Delivery />
                <Map />
                <Contacts />
            </Layout>
        </div>
    );
};

export default ShopPage;
