"use client";

import { Link } from "react-scroll";
import { motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "@/components/ui/backgroundBeamsWithCollision/BackgroundBeamsWithCollision";
import { TextGenerateEffect } from "@/components/ui/textGenerateEffect/TextGenerateEffect";
import { HoverBorderGradient } from "@/components/ui/hoverBorderGradient/HoverBorderGradient";

export default function Hero() {
    const duration = 1.5;
    const variants = {
        hidden: {
            filter: "blur(10px)",
            // transform: "translateX(-10%)",
            opacity: 0,
            transition: { duration: duration, ease: [0.25, 0.1, 0.25, 1] },
        },
        visible: {
            filter: "blur(0)",
            // transform: "translateX(0)",
            opacity: 1,
            transition: { duration: duration, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section id="home" className="hero relative w-full h-screen rounded-lg">
            <BackgroundBeamsWithCollision className="flex justify-center items-center w-full h-screen dark:bg-black bg-white dark:bg-grid-light-blue/[0.4] bg-grid-black/[0.2]">
                <div className="absolute inset-0 flex justify-center items-center bg-white dark:bg-black [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_30%,_rgba(255,255,255,0)_100%)]"></div>
                <div className="relative grid place-items-center z-10">
                    <div className="grid place-items-center">
                        <TextGenerateEffect
                            words="Hi,"
                            className="xl:text-6xl text-4xl font-semibold z-20"
                            duration={duration}
                        />
                        <TextGenerateEffect
                            words="I'm LakioLive"
                            className="xl:text-9xl md:text-7xl text-5xl font-bold z-20"
                            duration={duration}
                        />
                        <TextGenerateEffect
                            words="Frontend Developer"
                            className="xl:text-6xl md:text-4xl text-2xl font-semibold z-20"
                            duration={duration}
                        />
                    </div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                    >
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
                    </motion.div>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
}
