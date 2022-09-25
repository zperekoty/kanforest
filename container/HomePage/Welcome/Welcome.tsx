import { motion } from "framer-motion";
import Link from "next/link";

import { AppWrap, MotionWrap } from "../../../wrapper";
import { Hero } from "../../../svg";
import type { tVariants } from "../../../wrapper/MotionWrap";
import styles from "./Welcome.module.scss";

const variants: tVariants = { x: [100, 0], opacity: [0, 1] };

const Welcome = (): JSX.Element => {
    return (
        <>
            <div>
                <motion.div
                    whileInView={{ scale: [1.1, 1] }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.2,
                    }}
                    className={styles["hero-info"]}
                >
                    <div className={styles.description}>
                        <p>
                            <span>Kan Forest</span>
                            <br />
                            Мы работаем с 2015 года. За это время мы обзавелись
                            невероятным опытом, друзьями и клиентами. Мы умеем
                            делать интересные, необычные и качественные объекты.
                            <br />
                            <span>Люди Доверяют Нам Свои Дома</span>
                        </p>
                    </div>

                    <motion.div
                        className={styles.svg}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <Hero />
                    </motion.div>
                </motion.div>

                <div className={styles["hero-other"]}>
                    <div className={styles.other}>
                        <p>
                            Так же у нас есть свой{" "}
                            <Link href="/shop">
                                <a>магазин</a>
                            </Link>
                            . Там вы можете ознакомиться с каталогом наших
                            товаров.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Welcome, styles.welcome, variants), "about");
