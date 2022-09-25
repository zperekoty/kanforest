import { AppWrap, MotionWrap } from "../../../wrapper";
import type { tVariants } from "../../../wrapper/MotionWrap";

import { styles } from "../../../styles";

const variants: tVariants = { y: [225, 0], opacity: [0, 1] };

const ISE = (): JSX.Element => {
    return (
        <AppWrap idName="500">
            <MotionWrap classNames="" variants={variants}>
                <h2 className={styles["head-text"]}>
                    <span>500</span> | внутренняя ошибка сервера
                </h2>
            </MotionWrap>
        </AppWrap>
    );
};

export default ISE;
