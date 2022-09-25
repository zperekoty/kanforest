import { AppWrap, MotionWrap } from "../../../wrapper";
import type { tVariants } from "../../../wrapper/MotionWrap";
import { DeliveryTruck } from "../../../svg";
import { styles } from "../../../styles";
import classes from "./Delivery.module.scss";

const variants: tVariants = { x: [100, 0], opacity: [0, 1] };

const Delivery = (): JSX.Element => {
    const price: number = 400;

    const convertPrice = (price: number): string => {
        return price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
        });
    };

    return (
        <AppWrap idName="delivery">
            <MotionWrap classNames={classes.delivery} variants={variants}>
                <div className={classes["info-title"]}>
                    <h2 className={styles["head-text"]}>
                        условия <span>доставки</span>
                    </h2>
                    <DeliveryTruck />
                </div>

                <section>
                    <h3 className={styles["sub-head-text"]}>
                        Доставляем наши товары по станице <span>Каневская</span>{" "}
                        и станице <span>стародеревянковская</span> всего за{" "}
                        <span>{convertPrice(price)}</span>
                    </h3>
                </section>
            </MotionWrap>
        </AppWrap>
    );
};

export default Delivery;
