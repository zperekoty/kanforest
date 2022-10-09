/* eslint-disable react-hooks/rules-of-hooks */
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={router.route}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{ duration: 0.65 }}
                variants={{
                    initialState: {
                        opacity: 0,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    },
                    animateState: {
                        opacity: 1,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    },
                    exitState: {
                        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                    },
                }}
            >
                <Component {...pageProps} />
            </motion.div>

            {loading && <Loader />}
        </AnimatePresence>
    );
};

export default appWrapper;
