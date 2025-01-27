"use client";

import { SparklesCore } from "@/components/ui/sparkles/Sparkles";
import { Spotlight } from "@/components/ui/spotlight/Spotlight";

export default function AboutMe() {
    return (
        <section
            id="about"
            className="about-me relative w-full flex md:items-center md:justify-center overflow-hidden [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_70%,_rgba(255,255,255,0)_100%)]"
        >
            <Spotlight />
            <div className="flex items-center text-center h-screen container mx-auto">
                <div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="xl:text-9xl md:text-7xl text-4xl font-semibold">
                            About me
                        </h3>
                        <div className="w-[50rem] h-10 relative">
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                            <SparklesCore
                                background="transparent"
                                minSize={0.1}
                                maxSize={0.5}
                                particleDensity={1200}
                                className="w-full h-full hidden dark:block"
                                particleColor="#FFFFFF"
                            />
                            <SparklesCore
                                background="transparent"
                                minSize={0.1}
                                maxSize={0.5}
                                particleDensity={1200}
                                className="w-full h-full dark:hidden"
                                particleColor="#000"
                            />
                            <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                        </div>
                    </div>
                    <p className="xl:text-3xl md:text-xl text-lg">
                        My name is{" "}
                        <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
                            LakioLive
                        </span>{" "}
                        and I am a passionate web developer. I am actively
                        studying to become a highly skilled programmer. I
                        already have a lot of experience with{" "}
                        <span className="relative text-react-blue gap-1">
                            React
                        </span>
                        . My passion for programming started with a desire to
                        create interactive and dynamic web applications. I am
                        always looking to learn new technologies and improve my
                        skills to stay on the cutting edge of web development.
                    </p>
                </div>
            </div>
        </section>
    );
}
