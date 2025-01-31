import { motion } from "motion/react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { ITechnologyIcons, ProjectCardProps } from "./ProjectCard.interfaces";
import { IoMdLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Grid } from "../grid/Grid";

const technologyIcons: ITechnologyIcons = {
    HTML5: "./icons/HTML5.svg",
    CSS: "./icons/CSS3.svg",
    Sass: "./icons/Sass.svg",
    TailwindCSS: "./icons/TailwindCSS.svg",
    JavaScript: "./icons/JavaScript.svg",
    TypeScript: "./icons/TypeScript.svg",
    React: "./icons/React.svg",
    "React Native": "./icons/React.svg",
    Expo: "./icons/Expo.svg",
    MySQL: "./icons/MySQL.svg",
    SQLite: "./icons/SQLite.svg",
    Firebase: "./icons/Firebase.svg",
    "Framer Motion": "./icons/FramerMotion.svg",
    Formik: "./icons/Formik.svg",
};

export default function ProjectCard({
    id,
    name,
    description,
    imageSrc,
    technologies,
    repository,
    link,
}: ProjectCardProps) {
    return (
        <div className="relative flex flex-col items-start gap-5 max-w-7xl h-full p-6 bg-dark-gray rounded-xl [background:linear-gradient(0deg,#0B0B0B,#0B0B0B_50%,#0C0C0C)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border overflow-hidden">
            <Grid />
            <div className="relative w-full">
                <Image
                    src={imageSrc}
                    alt={name}
                    className="rounded-2xl"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className="grid gap-1">
                <h6 className="xl:text-4xl md:text-2xl text-xl font-semibold">
                    {name}
                </h6>
                <p className="xl:text-xl md:text-lg text-base text-gray-500 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div className="flex justify-between items-center w-full mt-auto">
                <div className="flex flex-wrap gap-3">
                    {technologies.map((tech: string, index: number) => (
                        <motion.span
                            whileHover={{ scale: 1.3 }}
                            key={tech + id + index}
                            data-tooltip-id={`tooltip-projects-${name
                                .split(" ")
                                .join("")}`}
                            data-tooltip-content={tech}
                            className="relative w-8 h-8"
                        >
                            <Image
                                src={technologyIcons[tech]}
                                alt={tech}
                                fill
                                sizes="10vw"
                            />
                        </motion.span>
                    ))}
                    <Tooltip
                        id={`tooltip-projects-${name.split(" ").join("")}`}
                        style={{
                            backgroundColor: "#4f4f4f",
                            color: "#fff",
                        }}
                    />
                </div>
                <div className="self-end flex gap-3 bg-white rounded-3xl px-2.5 py-1.5">
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={repository}
                        target="_blank"
                    >
                        <FaGithub className="text-3xl text-black" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={link}
                        target="_blank"
                    >
                        <IoMdLink className="text-3xl text-black" />
                    </motion.a>
                </div>
            </div>
        </div>
        // <div
        //             key={item.id}
        //             className="grid bg-gray-300/50 dark:bg-dark-gray rounded-2xl p-5 max-w-sm"
        //         >
        //             <ProjectCard />

        //         </div>

        // <div className="flex flex-col gap-1">
        //                         <h6 className="xl:text-4xl md:text-2xl text-lg font-semibold">
        //                             {item.name}
        //                         </h6>
        //                         <p className="xl:text-xl md:text-lg text-base text-gray-500 dark:text-light-gray">
        //                             {item.description}
        //                         </p>
        //                     </div>
        //                     <div className="flex flex-wrap gap-3">
        //                         {item.technologies.map(
        //                             (tech: string, index: number) => (
        //                                 <motion.span
        //                                     key={tech + item.id + index}
        //                                     whileHover={{ scale: 1.2 }}
        //                                     whileTap={{ scale: 0.8 }}
        //                                 >
        //                                     {technologyIcons[tech]}
        //                                 </motion.span>
        //                             ),
        //                         )}
        //                         <Tooltip
        //                             id="tooltip-projects"
        //                             style={{
        //                                 backgroundColor: "#4f4f4f",
        //                                 color: "#fff",
        //                             }}
        //                         />
        //                     </div>
        //                     <div className="flex place-self-end gap-3 bg-white rounded-3xl p-2 mt-5">
        //                         <motion.a
        //                             whileHover={{ scale: 1.2 }}
        //                             whileTap={{ scale: 0.8 }}
        //                             href={item.repository}
        //                             target="_blank"
        //                         >
        //                             <FaGithub className="text-3xl text-black" />
        //                         </motion.a>
        //                         <motion.a
        //                             whileHover={{ scale: 1.2 }}
        //                             whileTap={{ scale: 0.8 }}
        //                             href={item.link}
        //                             target="_blank"
        //                         >
        //                             <IoMdLink className="text-3xl text-black" />
        //                         </motion.a>
        //                     </div>
    );
}
