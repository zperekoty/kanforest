import "../styles/globals.scss";
import type { AppProps } from "next/app";

const appWrapper = ({ Component, pageProps }: AppProps): JSX.Element => (
    <Component {...pageProps} />
);

export default appWrapper;
