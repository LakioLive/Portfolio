"use client";

import { SparklesCore } from "@/components/ui/sparkles/Sparkles";
import { Spotlight } from "@/components/ui/spotlight/Spotlight";

export default function AboutMe() {
    return (
        <section
            id="about"
            className="relative overflow-hidden [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_70%,_rgba(255,255,255,0)_100%)]"
        >
            <div className="grid place-content-center text-center h-screen">
                <Spotlight />
                <div className="grid place-content-center w-svw">
                    <h3 className="xl:text-9xl md:text-7xl text-6xl font-semibold [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_40%,_rgba(255,255,255,0)_100%)]">
                        About me
                    </h3>
                    <div className="relative w-[30rem] md:w-[50rem] h-10 container mx-auto px-3 md:px-5">
                        <div className="absolute inset-x-20 top-0 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
                        <div className="absolute inset-x-20 top-0 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                        <div className="absolute inset-x-60 top-0 w-1/4 h-[5px] bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
                        <div className="absolute inset-x-60 top-0 w-1/4 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
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
                <p className="xl:text-3xl md:text-xl text-lg w-svw container mx-auto px-3 md:px-5">
                    My name is{" "}
                    <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
                        LakioLive
                    </span>{" "}
                    and I am a passionate web developer. I am actively studying
                    to become a highly skilled programmer. I already have a lot
                    of experience with{" "}
                    <span className="relative text-react-blue gap-1">
                        React
                    </span>
                    . My passion for programming started with a desire to create
                    interactive and dynamic web applications. I am always
                    looking to learn new technologies and improve my skills to
                    stay on the cutting edge of web development.
                </p>
            </div>
        </section>
    );
}
