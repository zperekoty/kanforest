import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { urlFor, clientFetch } from "../../../sanity";
import { AppWrap, MotionWrap } from "../../../wrapper";
import type { tVariants } from "../../../wrapper/MotionWrap";
import { Product, NoImage } from "../../../svg";
import { styles } from "../../../styles";
import { converter } from "../../../utils";
import noImage from "../../../public/noImage.svg";
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

    type tCategories = { category: string };

    type tProducts = {
        name: string;
        description: string;
        price: string;
        categories: Array<string>;
        imgUrl: string;
        _id: string;
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
                    products.filter((product: any) =>
                        product.categories.includes(item),
                    ),
                );
            }

            setFilterProducts(products);
        }, 500);
    };

    return (
        <AppWrap idName="catalogue">
            <MotionWrap classNames={classes.catalogue} variants={variants}>
                <div className={styles["info-title"]}>
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
                            onClick={() =>
                                handleProductFilter(category.category)
                            }
                            className={`${classes["categories__filter-item"]} ${
                                styles.aFl
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
                    {filterProducts.map((product: tProducts) => (
                        <motion.div
                            className={classes["category-portfolio-item"]}
                            whileInView={{
                                y: [100, 0],
                                opacity: [0, 1],
                            }}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            key={product._id}
                        >
                            <div
                                className={classes["category-portfolio-image"]}
                            >
                                <Link href={`/shop/${product._id}`}>
                                    <a style={{ textDecoration: "none" }}>
                                        {product.imgUrl ? (
                                            <Image
                                                src={urlFor(
                                                    product.imgUrl,
                                                ).url()}
                                                alt={product.name}
                                                layout="fill"
                                                priority
                                            />
                                        ) : (
                                            <NoImage />
                                        )}
                                    </a>
                                </Link>
                            </div>

                            <div className={classes["category-portfolio-card"]}>
                                <Link href={`/shop/${product._id}`}>
                                    <a>
                                        <h4
                                            className={styles.bTe}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {product.name}
                                        </h4>
                                    </a>
                                </Link>
                                <p
                                    className={styles.pTe}
                                    style={{ marginTop: 10 }}
                                >
                                    {product.description}
                                </p>
                                <h5 className={styles.bTe}>
                                    {converter(product.price)}
                                </h5>

                                <div
                                    className={
                                        classes["category-portfolio-card-tag"]
                                    }
                                >
                                    <p
                                        className={styles.pTe}
                                        style={{
                                            color: "var(--neutral-color)",
                                        }}
                                    >
                                        {product.categories[0]}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </MotionWrap>
        </AppWrap>
    );
};

export default Catalogue;
