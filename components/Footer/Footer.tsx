import Link from "next/link";

import { Logo, Phone, WhatsApp } from "../../svg";
import classes from "./Footer.module.scss";

type tLinks = {
    name: string;
    anchor: string;
};

type tLinksArray = {
    links: tLinks[];
};

const Footer = ({ links }: tLinksArray): JSX.Element => {
    type tSocial = {
        phone: string;
        tel: string;
        wa?: string;
    };

    const social: tSocial[] = [
        { phone: "+7 (995) 193-37-37", tel: "79951933737" },
        { phone: "+7 (995) 194-37-37", tel: "79951943737", wa: "79951943737" },
    ];

    return (
        <footer className={classes.f}>
            <div className={classes.fl}>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
            </div>

            <div className={classes.fL}>
                <ul>
                    {links.map(
                        (link): JSX.Element => (
                            <li key={link.anchor}>
                                {link.anchor.startsWith("/") ? (
                                    <Link href={link.anchor}>
                                        <a>{link.name}</a>
                                    </Link>
                                ) : (
                                    <a href={link.anchor}>{link.name}</a>
                                )}
                            </li>
                        ),
                    )}
                </ul>
            </div>

            <div className={classes.fp}>
                <ul>
                    {social.map(
                        (soc, index): JSX.Element => (
                            <li key={index}>
                                <a href={`tel:${soc.tel}`}>
                                    <Phone />
                                    {soc.phone}
                                </a>
                            </li>
                        ),
                    )}

                    {social.map(
                        (soc, index): JSX.Element => (
                            <li
                                key={index}
                                style={soc.wa ? {} : { display: "none" }}
                            >
                                <a href={`https://wa.me/${soc.wa}`}>
                                    <WhatsApp />
                                    {soc.phone}
                                </a>
                            </li>
                        ),
                    )}
                </ul>
            </div>

            <div className={classes.fc}>
                <p>
                    &copy;{" "}
                    {new Date().getUTCFullYear() > 2022
                        ? `2022 — ${new Date().getUTCFullYear()}`
                        : "2022"}{" "}
                    {"Kan Forest"}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
