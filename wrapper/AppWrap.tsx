import { styles } from "../styles";

type Props = {
    children: React.ReactNode;
    idName: string;
    classNames?: string;
};

const AppWrap = ({ children, idName, classNames }: Props): JSX.Element => {
    return (
        <div
            id={idName}
            className={`${styles.aCon} ${!classNames ? "" : classNames}`}
        >
            <div className={`${styles.aWr} ${styles.aFl}`}>{children}</div>
        </div>
    );
};

export default AppWrap;
