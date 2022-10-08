import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { styles } from "../../styles";
import type { tVariants } from "../../wrapper/MotionWrap";
import { Location, Office, Stock } from "../../svg";
import classes from "./Map.module.scss";

const variants: tVariants = { x: [-100, 0], opacity: [0, 1] };

type Props = {
    color?: string;
};

const Map = ({ color }: Props): JSX.Element => {
    return (
        <AppWrap idName="map" classNames={color}>
            <MotionWrap classNames={classes.map} variants={variants}>
                <div className={styles["info-title"]}>
                    <h2 className={styles["head-text"]}>
                        где нас <span>найти</span>
                    </h2>
                    <Location />
                </div>

                <section className={classes.address}>
                    <motion.div
                        className={classes["address-card"]}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <h2>Офис</h2>
                        <p>
                            <Office /> Ст. Каневская, ул Садовая, 12
                        </p>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.875927273135!2d38.993659415656545!3d46.07351507911285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e517a96c40de61%3A0xaea8546363703a51!2z0KHQsNC00L7QstCw0Y8g0YPQuy4sIDEyLCDQmtCw0L3QtdCy0YHQutCw0Y8sINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTM3MzA!5e0!3m2!1sru!2sru!4v1664014471650!5m2!1sru!2sru"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={classes.iframe}
                        ></iframe>
                    </motion.div>

                    <motion.div
                        className={classes["address-card"]}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <h2>Склад</h2>
                        <p>
                            <Stock /> Ст. Каневская, ул. Длинная, 240/1
                        </p>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.6268375712616!2d38.98115751565601!3d46.0585409791125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e5165adb1a5611%3A0x649734ffd6bd4f0b!2z0YPQuy4g0JTQu9C40L3QvdCw0Y8sIDI0MCwg0JrQsNC90LXQstGB0LrQsNGPLCDQmtGA0LDRgdC90L7QtNCw0YDRgdC60LjQuSDQutGA0LDQuSwgMzUzNzMw!5e0!3m2!1sru!2sru!4v1664014563951!5m2!1sru!2sru"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={classes.iframe}
                        ></iframe>
                    </motion.div>
                </section>
            </MotionWrap>
        </AppWrap>
    );
};

export default Map;
