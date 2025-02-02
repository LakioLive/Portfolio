"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu } from "react-icons/fi";
// import { IoMoon } from "react-icons/io5";
// import { FaSun } from "react-icons/fa";

const menuName = ["home", "about", "skills", "projects", "contact me"];
const duration = 0.3;

export default function Navbar() {
    const [handleDropdownMenu, setHandleDropdownMenu] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [handleDarkMode, setHandleDarkMode] = useState(true);
    const [selectedTab, setSelectedTab] = useState("home");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const hoverBackgroundColor = handleDarkMode ? "#374151" : "#d1d5db";
    const initialBackgroundColor = "rgba(0, 0, 0, 0)";
    const selectedBackgroundColor = "#0077FF";

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

    useEffect(() => {
        if (handleDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [handleDarkMode]);

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
        <header className="fixed top-0 left-1/2 w-max mt-4 bg-dark-gray/50 rounded-full border border-light-gray backdrop-blur-md transform -translate-x-1/2 z-50">
            <nav className="flex">
                <div className="hidden md:block md:w-auto">
                    <ul className="flex">
                        {menuName.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{
                                    backgroundColor: initialBackgroundColor,
                                }}
                                whileHover={{
                                    backgroundColor: hoverBackgroundColor,
                                }}
                                animate={{
                                    backgroundColor: initialBackgroundColor,
                                }}
                                transition={{ duration }}
                                className="relative flex rounded-full cursor-pointer"
                            >
                                <Link
                                    spy={true}
                                    to={item.replace(/\s+/g, "")}
                                    offset={item === "contact me" ? -580 : 0}
                                    className={`relative px-8 py-2 rounded-full cursor-pointer z-10 ${
                                        selectedTab === item
                                            ? " text-white"
                                            : ""
                                    }`}
                                    onSetActive={() => setSelectedTab(item)}
                                >
                                    {item[0].toUpperCase() + item.slice(1)}
                                </Link>
                                {selectedTab === item && (
                                    <motion.div
                                        layoutId="selected"
                                        initial={{
                                            backgroundColor:
                                                selectedBackgroundColor,
                                        }}
                                        animate={{
                                            backgroundColor:
                                                selectedBackgroundColor,
                                        }}
                                        transition={{ duration }}
                                        className="absolute inset-0 rounded-full"
                                    />
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="flex space-x-4">
                    <motion.button
                        initial={{ backgroundColor: initialBackgroundColor }}
                        whileHover={{ backgroundColor: hoverBackgroundColor }}
                        animate={{ backgroundColor: initialBackgroundColor }}
                        type="button"
                        className="flex md:hidden justify-center items-center w-10 h-10 p-2 text-sm text-gray-400 hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
                        onClick={() =>
                            setHandleDropdownMenu(!handleDropdownMenu)
                        }
                        ref={menuButtonRef}
                    >
                        <FiMenu className="text-xl" />
                    </motion.button>
                </div>
            </nav>
            <AnimatePresence>
                {handleDropdownMenu && (
                    <motion.div
                        initial="hidden"
                        animate={handleDropdownMenu ? "visible" : "hidden"}
                        exit="hidden"
                        variants={navContainer}
                        ref={dropdownRef}
                        className="absolute top-7 mt-4 bg-dark-gray border border-white rounded backdrop-blur-md"
                    >
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={navList}
                            className="grid justify-items-center sm:gap-1 p-1 text-white"
                        >
                            {menuName.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{
                                        backgroundColor: initialBackgroundColor,
                                    }}
                                    whileHover={{
                                        backgroundColor: hoverBackgroundColor,
                                    }}
                                    animate={{
                                        backgroundColor: initialBackgroundColor,
                                    }}
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
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
