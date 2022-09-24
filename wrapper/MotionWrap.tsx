import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

export type tVariants = {
    y?: number[];
    x?: number[];
    opacity?: number[];
};

const MotionWrap = (
    Component: React.ElementType,
    classNames: string,
    variants: tVariants,
) =>
    function HOC(): JSX.Element {
        return (
            <motion.div
                whileInView={variants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`${classNames} ${styles.aFl} ${styles["motion-div"]}`}
            >
                <Component />
            </motion.div>
        );
    };

export default MotionWrap;
