"use client";

import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";
import { HoverBorderGradient } from "@/components/ui/hoverBorderGradient/HoverBorderGradient";

export default function ContactMeBtn() {
    return (
        <HoverBorderGradient containerClassName="mt-4">
            <Link
                spy={true}
                smooth={true}
                duration={500}
                to="contactme"
                className="flex gap-2 items-center xl:text-2xl md:text-xl text-lg font-semibold z-20"
            >
                Contact me{" "}
                <FaArrowDown className="xl:text-xl md:text-base text-sm" />
            </Link>
        </HoverBorderGradient>
    );
}
