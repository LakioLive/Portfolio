"use client";

import { Link } from "react-scroll";
import { FooterNavigationProps } from "./FooterNavigation.interfaces";

export default function FooterNavigation({
    navigationNameData,
}: FooterNavigationProps) {
    return (
        <nav className="flex flex-col space-y-4">
            {navigationNameData.map((item) => (
                <Link
                    key={item}
                    to={`${item.toLowerCase()}`}
                    className="w-fit text-gray-400 hover:text-light-blue transition cursor-pointer"
                >
                    {item}
                </Link>
            ))}
        </nav>
    );
}
