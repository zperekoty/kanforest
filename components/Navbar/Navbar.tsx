import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

import { Logo } from "../../svg";
import classes from "./Navbar.module.scss";

type tLinks = {
    name: string;
    anchor: string;
};

type tLinksArray = {
    links: tLinks[];
};

const Navbar = ({ links }: tLinksArray): JSX.Element => {
    const [menu, setMenu] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const closeMenu = (): void => {
        if (!isClosing) {
            setIsClosing(true);

            setTimeout(() => {
                setIsClosing(false);
                setMenu(false);
            }, 460);
        }
    };

    return (
        <nav className={classes.n}>
            <div className={classes.nl}>
                <Link href="/">
                    <a>
                        <Logo />
                    </a>
                </Link>
            </div>

            <ul className={classes.nL}>
                {links.map((link) => (
                    <li key={link.anchor}>
                        {link.anchor.startsWith("/") ? (
                            <Link href={link.anchor}>
                                <a>{link.name}</a>
                            </Link>
                        ) : (
                            <a href={link.anchor}>{link.name}</a>
                        )}
                    </li>
                ))}
            </ul>

            <div className={classes.nM}>
                <HiMenu onClick={() => setMenu(true)} />

                {menu && (
                    <motion.div
                        whileInView={
                            !isClosing
                                ? { x: [250, 0], opacity: [0, 1] }
                                : { x: [0, 250], opacity: [1, 0] }
                        }
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                    >
                        <HiX onClick={closeMenu} />
                        <ul>
                            {links.map((link) => (
                                <li key={link.anchor}>
                                    {link.anchor.startsWith("/") ? (
                                        <Link href={link.anchor}>
                                            <a>{link.name}</a>
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.anchor}
                                            onClick={() => setMenu(false)}
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
