import Image from "next/image";
import { motion } from "framer-motion";

import { urlFor } from "../../../sanity";
import { converter } from "../../../utils";
import { AppWrap, MotionWrap } from "../../../wrapper";
import { NoImage } from "../../../svg";
import type { tVariants } from "../../../wrapper/MotionWrap";
import classes from "./Product.module.scss";
import { styles } from "../../../styles";

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

const variants: tVariants = { y: [100, 0], opacity: [0, 1] };

const Product = ({ product }: Props): JSX.Element => {
    return (
        <AppWrap idName="product">
            <MotionWrap classNames={classes.product} variants={variants}>
                <motion.div
                    whileInView={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={classes["product-card"]}
                >
                    <div className={styles["info-title"]}>
                        <h2 className={styles["head-text"]}>
                            <span>{product[0]?.name}</span>
                        </h2>
                    </div>

                    <div className={classes["product-item"]}>
                        <div className={classes["product-image"]}>
                            {product[0]?.imgUrl ? (
                                <Image
                                    src={urlFor(product[0]?.imgUrl).url()}
                                    alt={product[0]?.name}
                                    width={200}
                                    height={200}
                                    priority
                                />
                            ) : (
                                <NoImage />
                            )}
                        </div>

                        <div className={classes["product-info"]}>
                            <h1>{product[0]?.name}</h1>

                            <p>{product[0]?.description}</p>

                            <p>Категория: {product[0]?.categories[0]}</p>

                            <h3>Цена: {converter(product[0]?.price)}</h3>
                        </div>
                    </div>
                </motion.div>
            </MotionWrap>
        </AppWrap>
    );
};

export default Product;
