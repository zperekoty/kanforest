import Head from "next/head";

import { Navbar, Footer } from "../../components/";

type tLinks = { name: string; anchor: string };

type Props = {
    children: React.ReactNode;
    title: string;
    desc: string;
    kw: string;
    links: tLinks[];
};

const Layout = ({ children, title, desc, kw, links }: Props): JSX.Element => {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=7" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html;charset=UTF-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="description" content={desc} />
                <meta name="keywords" content={kw} />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="title" content={title} />
                <title>{title}</title>
            </Head>

            <Navbar links={links} />
            {children}
            <Footer links={links} />
        </>
    );
};

export default Layout;
