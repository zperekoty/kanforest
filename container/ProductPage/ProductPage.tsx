import { Layout } from "../";
import { Product } from "./";
import { converter } from "../../utils";
import { styles } from "../../styles";

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

const ProductPage = ({ product }: Props): JSX.Element => {
    type tLinks = { name: string; anchor: string };

    const links: tLinks[] = [
        { name: "главная", anchor: "/" },
        { name: "магазин", anchor: "/shop" },
    ];

    return (
        <div className={styles.overflow}>
            <Layout
                title={product[0]?.name}
                desc={`Лес Каневская. ${product[0]?.name}: ${
                    product[0].description
                }, ${converter(
                    product[0]?.price,
                )}. Позвоните нам, чтобы заказать или уточнить наличие товара: +7 (995) 193-37-37, +7 (995) 194-37-37. Или напишите нам в WhatsApp: +7 (995) 194-37-37`}
                kw={`Лес, Лес Каневская, Каневская, купить лес каневская, лес каневская купить, лес купить каневская, купить лес, лес купить, купить ${product[0]?.name}, ${product[0]?.name} купить, ${product[0]?.name}`}
                links={links}
            >
                <Product product={product} />
            </Layout>
        </div>
    );
};

export default ProductPage;
