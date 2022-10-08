import { AppWrap } from "../../wrapper";
import classes from "./Loader.module.scss";

const Loader = (): JSX.Element => {
    return (
        <AppWrap idName="loader" classNames={classes.loader}>
            <div className={classes["lds-ellipsis"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </AppWrap>
    );
};

export default Loader;
