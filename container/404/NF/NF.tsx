import { AppWrap, MotionWrap } from "../../../wrapper";
import type { tVariants } from "../../../wrapper/MotionWrap";

import { styles } from "../../../styles";

const variants: tVariants = { y: [225, 0], opacity: [0, 1] };

const NF = (): JSX.Element => {
    return (
        <AppWrap idName="404">
            <MotionWrap classNames="" variants={variants}>
                <h2 className={styles["head-text"]}>
                    <span>404</span> | такой страницы не существует
                </h2>
            </MotionWrap>
        </AppWrap>
    );
};

export default NF;
