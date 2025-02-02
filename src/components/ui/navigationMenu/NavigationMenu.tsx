"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { NavigationMenuProps } from "./NavigationMenu.interfaces";

const navContainer = {
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
    hidden: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
};

const navList = {
    visible: {
        opacity: 1,
        transition: { delayChildren: 0.2, staggerChildren: 0.07 },
    },
    hidden: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const navItem = {
    visible: {
        y: 0,
        opacity: 1,
        transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    hidden: {
        y: 50,
        opacity: 0,
        transition: { y: { stiffness: 1000, velocity: -100 } },
    },
};

export default function NavigationMenu({
    navigationNameData,
}: NavigationMenuProps) {
    const [handleDropdownMenu, setHandleDropdownMenu] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target as Node)
            ) {
                setHandleDropdownMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef, menuButtonRef]);

    useEffect(() => {
        const handleScroll = () => {
            if (handleDropdownMenu) {
                setHandleDropdownMenu(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleDropdownMenu]);

    return (
        <div className="relative flex space-x-4">
            <motion.button
                type="button"
                className="flex md:hidden justify-center items-center w-10 h-10 p-2 text-sm text-gray-400 hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
                onClick={() => setHandleDropdownMenu(!handleDropdownMenu)}
                ref={menuButtonRef}
            >
                <FiMenu className="text-xl" />
            </motion.button>
            <AnimatePresence>
                {handleDropdownMenu && (
                    <motion.nav
                        initial="hidden"
                        animate={handleDropdownMenu ? "visible" : "hidden"}
                        exit="hidden"
                        variants={navContainer}
                        ref={dropdownRef}
                        className="absolute top-7 -left-12 mt-4 bg-dark-gray border border-white rounded backdrop-blur-md"
                    >
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={navList}
                            className="grid justify-items-center sm:gap-1 p-1 text-white"
                        >
                            {navigationNameData.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={navItem}
                                    className="flex"
                                >
                                    <Link
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        to={item.replace(/\s+/g, "")}
                                        className={`${
                                            item === "projects"
                                                ? "px-5"
                                                : item === "contact me"
                                                ? "px-1"
                                                : "px-6"
                                        } sm:px-8 py-2 sm:rounded-full cursor-pointer`}
                                        activeClass="text-white bg-light-blue"
                                        onClick={() =>
                                            setHandleDropdownMenu(
                                                !handleDropdownMenu,
                                            )
                                        }
                                    >
                                        {item[0].toUpperCase() +
                                            item.slice(1, item.length)}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </div>
    );
}
