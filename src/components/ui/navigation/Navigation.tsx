"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import * as motion from "motion/react-client";
import { NavigationProps } from "./Navigation.interfaces";

const duration = 0.3;

export default function Navigation({ navigationNameData }: NavigationProps) {
    const [selectedTab, setSelectedTab] = useState("home");

    const hoverBackgroundColor = "#374151";
    const initialBackgroundColor = "rgba(0, 0, 0, 0)";
    const selectedBackgroundColor = "#0077FF";

    return (
        <nav className="hidden md:block md:w-auto">
            <ul className="flex">
                {navigationNameData.map((item, i) => (
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
                                selectedTab === item ? " text-white" : ""
                            }`}
                            onSetActive={() => setSelectedTab(item)}
                        >
                            {item[0].toUpperCase() + item.slice(1)}
                        </Link>
                        {selectedTab === item && (
                            <motion.div
                                layoutId="selected"
                                initial={{
                                    backgroundColor: selectedBackgroundColor,
                                }}
                                animate={{
                                    backgroundColor: selectedBackgroundColor,
                                }}
                                transition={{ duration }}
                                className="absolute inset-0 rounded-full"
                            />
                        )}
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
}
