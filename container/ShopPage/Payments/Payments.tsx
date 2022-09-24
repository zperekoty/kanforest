import { AppWrap, MotionWrap } from "../../../wrapper";
import type { tVariants } from "../../../wrapper/MotionWrap";
import { Card, Visa, MasterCard, JCB, WorldPay } from "../../../svg";
import { styles } from "../../../styles";
import classes from "./Payments.module.scss";

const variants: tVariants = { y: [-100, 0], opacity: [0, 1] };

const Payments = (): JSX.Element => {
    return (
        <>
            <div className={classes["info-title"]}>
                <h2 className={styles["head-text"]}>
                    способы <span>оплаты</span>
                </h2>
                <Card />
            </div>

            <section className={classes.info}>
                <h3 className={styles["sub-head-text"]}>
                    поддерживаем самые <span>популярные</span> способы оплаты
                </h3>

                <div className={classes["payments-cards"]}>
                    <Visa />
                    <MasterCard />
                    <JCB />
                    <WorldPay />
                </div>
            </section>
        </>
    );
};

export default AppWrap(
    MotionWrap(Payments, classes.payments, variants),
    "payments",
    styles["app-sec-bg"],
);
