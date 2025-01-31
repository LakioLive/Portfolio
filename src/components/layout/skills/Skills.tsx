"use client";

import SkillsContainer from "@/components/ui/skillsContainer/SkillsContainer";
import { SparklesCore } from "@/components/ui/sparkles/Sparkles";
import { Spotlight } from "@/components/ui/spotlight/Spotlight";

const frontendSkills = [
    { src: "./icons/HTML5.svg", name: "HTML5" },
    { src: "./icons/CSS3.svg", name: "CSS3" },
    { src: "./icons/Sass.svg", name: "Sass" },
    { src: "./icons/Bootstrap.svg", name: "Bootstrap" },
    { src: "./icons/TailwindCSS.svg", name: "Tailwind CSS" },
    { src: "./icons/JavaScript.svg", name: "JavaScript" },
    { src: "./icons/TypeScript.svg", name: "TypeScript" },
    { src: "./icons/React.svg", name: "React" },
    { src: "./icons/Redux.svg", name: "Redux" },
    { src: "./icons/Next.js.svg", name: "Nextjs", customTheme: true },
];

const backendSkills = [
    { src: "./icons/PHP.svg", name: "PHP" },
    { src: "./icons/Laravel.svg", name: "Laravel" },
    { src: "./icons/MySQL.svg", name: "MySQL" },
    { src: "./icons/SQLite.svg", name: "SQLite" },
];

const mobileSkills = [
    { src: "./icons/React.svg", name: "React Native" },
    { src: "./icons/Expo.svg", name: "Expo", customTheme: true },
];

const otherSkills = [
    { src: "./icons/Python.svg", name: "Python" },
    { src: "./icons/Firebase.svg", name: "Firebase" },
    { src: "./icons/Supabase.svg", name: "Supabase" },
    { src: "./icons/Vercel.svg", name: "Vercel", customTheme: true },
    { src: "./icons/Git.svg", name: "Git" },
    { src: "./icons/GitHub.svg", name: "GitHub", customTheme: true },
    { src: "./icons/GitHubActions.svg", name: "GitHub Actions" },
    { src: "./icons/NPM.svg", name: "NPM" },
    { src: "./icons/Vite.js.svg", name: "Vite.js" },
    { src: "./icons/Composer.svg", name: "Composer" },
    { src: "./icons/Markdown.svg", name: "Markdown", customTheme: true },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative w-full overflow-hidden [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_80%,_rgba(255,255,255,0)_100%)]
            "
        >
            <Spotlight />
            <div className="grid place-content-center h-full lg:h-screen container mx-auto">
                <div className="flex flex-col items-center justify-center mt-56 lg:my-0">
                    <h3 className="xl:text-9xl text-7xl font-semibold [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_40%,_rgba(255,255,255,0)_100%)]">
                        Skills
                    </h3>
                    <div className="w-[30rem] h-12 relative">
                        <div className="absolute inset-x-20 top-0 w-3/4 h-[2px]  bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-5">
                    <SkillsContainer
                        title="Frontend"
                        skillsData={frontendSkills}
                    />
                    <SkillsContainer
                        title="Backend"
                        skillsData={backendSkills}
                    />
                    <SkillsContainer title="Mobile" skillsData={mobileSkills} />
                    <SkillsContainer title="Other" skillsData={otherSkills} />
                </div>
            </div>
        </section>
    );
}
