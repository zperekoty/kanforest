/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { urlFor, clientFetch } from "../../../sanity";
import { AppWrap, MotionWrap } from "../../../wrapper";
import type { tVariants } from "../../../wrapper/MotionWrap";
import { Product } from "../../../svg";
import { styles } from "../../../styles";
import classes from "./Catalogue.module.scss";

const variants: tVariants = { y: [100, 0], opacity: [0, 1] };

const Catalogue = (): JSX.Element => {
    const [activeFilter, setActiveFilter] = useState<string>("Пиломатериалы");
    const [animateCard, setAnimateCard] = useState<any[]>([
        {
            y: 0,
            opacity: 1,
        },
    ]);

    const [products, setProducts] = useState<tProducts[]>([]);
    const [filterProducts, setFilterProducts] = useState<tProducts[]>([]);
    const [categories, setCategories] = useState<tCategories[]>([]);

    type tProducts = {
        name: string;
        description: string;
        price: string;
        categories: Array<string>;
        imgUrl: string;
    };

    type tCategories = {
        category: string;
    };

    type tQueries = {
        query: string;
        to:
            | React.Dispatch<React.SetStateAction<tProducts[]>>[]
            | React.Dispatch<React.SetStateAction<tCategories[]>>[];
    };

    useEffect(() => {
        const queries: tQueries[] = [
            {
                query: '*[_type == "products"]',
                to: [setProducts, setFilterProducts],
            },
            {
                query: '*[_type == "categories"]',
                to: [setCategories],
            },
        ];

        clientFetch(queries);
    }, []);

    const handleProductFilter = (item: string) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item !== "Все") {
                return setFilterProducts(
                    products.filter((product) =>
                        product.categories.includes(item),
                    ),
                );
            }

            setFilterProducts(products);
        }, 500);
    };

    const convertPrice = (previousPrice: string): string => {
        const newPrice = parseInt(previousPrice).toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
        });

        return newPrice;
    };

    return (
        <>
            <div className={classes["info-title"]}>
                <h2 className={styles["head-text"]}>
                    каталог <span>товаров</span>
                </h2>
                <Product />
            </div>

            <div className={classes.categories}>
                {categories.map((category: tCategories, index: number) => (
                    <motion.div
                        key={index}
                        whileInView={{ y: [50, 0], opacity: [0, 1] }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                            ease: "easeInOut",
                        }}
                        onClick={() => handleProductFilter(category.category)}
                        className={`${classes["categories__filter-item"]} ${
                            styles.aFL
                        } ${
                            activeFilter === category.category
                                ? classes["acvite-item"]
                                : ""
                        }`}
                    >
                        {category.category}
                    </motion.div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className={classes["category-portfolio"]}
            >
                {filterProducts.map((product: tProducts, index: number) => (
                    <motion.div
                        key={index}
                        className={classes["category-portfolio-item"]}
                        whileInView={{ y: [100, 0], opacity: [0, 1] }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <div className={classes["category-portfolio-image"]}>
                            <img
                                src={urlFor(product.imgUrl)}
                                alt={product.name}
                                loading="lazy"
                            />
                        </div>

                        <div className={classes["category-portfolio-card"]}>
                            <h4 className={styles.bTe}>{product.name}</h4>
                            <p className={styles.pTe} style={{ marginTop: 10 }}>
                                {product.description}
                            </p>
                            <h5 className={styles.bTe}>
                                {convertPrice(product.price)}
                            </h5>

                            <div
                                className={
                                    classes["category-portfolio-card-tag"]
                                }
                            >
                                <p
                                    className={styles.pTe}
                                    style={{ color: "var(--neutral-color)" }}
                                >
                                    {product.categories[0]}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Catalogue, classes.catalogue, variants),
    "catalogue",
);
