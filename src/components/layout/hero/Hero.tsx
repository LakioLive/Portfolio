"use client";

import { Link } from "react-scroll";
import { motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";
import { BackgroundBeamsWithCollision } from "@/components/ui/backgroundBeamsWithCollision/BackgroundBeamsWithCollision";
import { TextGenerateEffect } from "@/components/ui/textGenerateEffect/TextGenerateEffect";

export default function Hero() {
    const duration = 1.5;
    const variants = {
        hidden: {
            filter: "blur(10px)",
            // transform: "translateY(20%)",
            opacity: 0,
            transition: { duration: duration, ease: [0.25, 0.1, 0.25, 1] },
        },
        visible: {
            filter: "blur(0)",
            // transform: "translateY(0)",
            opacity: 1,
            transition: { duration: duration, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section id="home" className="hero relative w-full h-screen rounded-lg">
            <BackgroundBeamsWithCollision className="flex justify-center items-center w-full h-screen dark:bg-black bg-white dark:bg-grid-light-blue/[0.4] bg-grid-black/[0.2]">
                <div className="absolute inset-0 flex justify-center items-center bg-white dark:bg-black [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_30%,_rgba(255,255,255,0)_100%)]"></div>
                <div className="relative flex flex-col justify-center items-center z-10">
                    <TextGenerateEffect
                        words="Hi,"
                        className="xl:text-6xl md:text-4xl text-2xl font-semibold z-20"
                        duration={duration}
                    />
                    <TextGenerateEffect
                        words="I'm LakioLive"
                        className="xl:text-9xl md:text-7xl text-5xl font-bold text-yellow-300 sm:text-light-blue z-20"
                        duration={duration}
                    />
                    <TextGenerateEffect
                        words="Frontend Developer"
                        className="xl:text-6xl md:text-4xl text-2xl font-semibold z-20"
                        duration={duration}
                    />
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#1e40af",
                        }}
                        whileTap={{
                            scale: 0.9,
                            backgroundColor: "#0077FF",
                        }}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        className="text-white bg-light-blue focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full xl:px-7 md:px-5 px-3 xl:py-2 py-1 text-center mt-8 z-20 cursor-pointer"
                    >
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
                    </motion.button>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
}
