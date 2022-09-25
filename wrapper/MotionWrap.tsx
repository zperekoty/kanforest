import { motion } from "framer-motion";

import { styles } from "../styles";

export type tVariants = {
    y?: number[];
    x?: number[];
    opacity?: number[];
};

type Props = {
    children: React.ReactNode;
    classNames: string;
    variants: tVariants;
};

const MotionWrap = ({ children, classNames, variants }: Props): JSX.Element => {
    return (
        <motion.div
            whileInView={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${classNames} ${styles.aFl} ${styles["motion-div"]}`}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrap;
