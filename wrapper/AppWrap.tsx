import React from "react";

import { styles } from "../styles";

const AppWrap = (
    Component: React.ElementType,
    idName: string,
    classNames?: string,
) =>
    function HOC(): JSX.Element {
        return (
            <div
                id={idName}
                className={`${styles.aCon} ${!classNames ? "" : classNames}`}
            >
                <div className={`${styles.aWr} ${styles.aFl}`}>
                    <Component />
                </div>
            </div>
        );
    };

export default AppWrap;
