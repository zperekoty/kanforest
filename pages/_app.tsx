/* eslint-disable react-hooks/rules-of-hooks */
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import "../styles/globals.scss";
import { Loader } from "../components";

const appWrapper = ({ Component, pageProps }: AppProps): JSX.Element => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const handleStart = (url: string) =>
            url !== router.asPath && setLoading(true);
        const handleStop = (url: string) =>
            url === router.asPath && setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router]);

    return (
        <>
            {loading && <Loader />}
            <Component {...pageProps} />
        </>
    );
};

export default appWrapper;
