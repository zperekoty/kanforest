import { AppWrap, MotionWrap } from "../../../wrapper";
import type { tVariants } from "../../../wrapper/MotionWrap";
import { PhoneTitle, Phone, WhatsApp } from "../../../svg";
import { styles } from "../../../styles";
import classes from "./Contacts.module.scss";

const variants: tVariants = { y: [-200, 0], opacity: [0, 1] };

const Contacts = () => {
    return (
        <>
            <div className={classes["info-title"]}>
                <h2 className={styles["head-text"]}>
                    наши <span>контакты</span>
                </h2>
                <PhoneTitle />
            </div>

            <div className={classes.cards}>
                <div className={classes.card}>
                    <Phone />
                    <a href="tel:+79951933737">+7 (995) 193-37-37</a>
                </div>

                <div className={classes.card}>
                    <Phone />
                    <a href="tel:+79951943737">+7 (995) 194-37-37</a>
                </div>

                <div className={classes.card}>
                    <WhatsApp />
                    <a href="https://wa.me/79951943737">+7 (995) 194-37-37</a>
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Contacts, classes.contacts, variants),
    "contacts",
);
