"use client";

import { Spotlight } from "@/components/ui/spotlight/Spotlight";
import { SparklesCore } from "@/components/ui/sparkles/Sparkles";
import ProjectCard from "@/components/ui/projectCard/ProjectCard";

interface IProject {
    id: number;
    name: string;
    description: string;
    imageSrc: string;
    technologies: string[];
    repository: string;
    link: string;
}

const dataProjects = [
    {
        id: 1,
        name: "Form Validation",
        description:
            "This project provides a comprehensive form validation system designed to ensure data integrity and enhance user experience.",
        imageSrc: "/website_form.jpg",
        technologies: ["HTML5", "CSS", "Sass", "JavaScript"],
        repository: "https://github.com/LakioLive/validateForm",
        link: "https://form-validation-lakio.vercel.app/",
    },
    {
        id: 2,
        name: "Interactive Map Trip",
        description:
            "This application is designed to help tourists find points of interest and plan their routes. The interactive map allows users to search for locations, view details about various attractions, and create customized travel itineraries.",
        imageSrc: "/website_trip.jpg",
        technologies: [
            "Sass",
            "TailwindCSS",
            "TypeScript",
            "React",
            "Firebase",
            "Framer Motion",
        ],
        repository: "https://github.com/LakioLive/InteractiveMapTrip",
        link: "https://interactive-map-trip.vercel.app/",
    },
    {
        id: 3,
        name: "Kanban Board Sliwka",
        description:
            "This application enables teams to manage projects efficiently with a feature-rich Kanban board. It offers tools for task organization, seamless drag-and-drop functionality, and real-time updates, ensuring an optimized workflow and improved collaboration.",
        imageSrc: "/website_kanban.jpg",
        technologies: [
            "Sass",
            "TailwindCSS",
            "TypeScript",
            "React",
            "Firebase",
            "Framer Motion",
            "Formik",
        ],
        repository: "https://github.com/LakioLive/KanbanBoardSliwka",
        link: "https://kanban-board-sliwka.vercel.app/",
    },
    {
        id: 4,
        name: "SloudPL Page",
        description:
            "This site is made for SloudPL. It offers game server hosting and other services.",
        imageSrc: "/website_sloudpl.jpg",
        technologies: ["Sass", "TailwindCSS", "TypeScript", "React"],
        repository: "https://github.com/LakioLive/SloudPLPage",
        link: "https://sloud.pl/",
    },
    {
        id: 5,
        name: "App Store",
        description: "This site is made for SloudPL. Simple App Store.",
        imageSrc: "/website_app-store.jpg",
        technologies: ["HTML5", "TailwindCSS", "JavaScript"],
        repository: "https://github.com/SloudPL/app-store",
        link: "https://apps.sloudhost.ovh/",
    },
];

export default function Projects() {
    const renderItem = (arr: IProject[]) => {
        return arr.map((project: IProject) => {
            return (
                <div key={project.id}>
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        description={project.description}
                        imageSrc={project.imageSrc}
                        technologies={project.technologies}
                        repository={project.repository}
                        link={project.link}
                    />
                </div>
            );
        });
    };

    return (
        <section
            id="projects"
            className="relative w-full overflow-hidden [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_80%,_rgba(255,255,255,0)_100%)]"
        >
            <Spotlight />
            <div className="h-full container mx-auto px-5 md:px-3">
                <div className="flex flex-col items-center mt-56 lg:mt-32">
                    <h3 className="xl:text-9xl text-7xl font-semibold [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_40%,_rgba(255,255,255,0)_100%)]">
                        Projects
                    </h3>
                    <div className="relative w-[45rem] h-12">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                    {renderItem(dataProjects)}
                </div>
            </div>
        </section>
    );
}
