"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { TextGenerateEffectProps } from "./TextGenerateEffectProps.interfaces";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: TextGenerateEffectProps) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            },
        );
    }, [filter, duration, animate]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="text-black dark:text-white opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="text-black dark:text-white">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
