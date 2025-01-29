import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { motion } from "motion/react";
import { Grid } from "../grid/Grid";
import { SkillsContainerProps } from "./SkillsContainer.interfaces";

export default function SkillsContainer({
    title,
    skillsData,
}: SkillsContainerProps) {
    return (
        <div className="relative max-w-7xl mx-auto p-8 bg-dark-gray rounded-xl [background:linear-gradient(0deg,#0B0B0B,#0B0B0B_50%,#0C0C0C)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border overflow-hidden">
            <Grid size={20} />
            <h3 className="mb-5 text-3xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
                {title}
            </h3>
            <div className="grid grid-cols-3 lg:grid-cols-4 justify-items-center gap-10 md:gap-5">
                {skillsData.map((skill, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.3 }}>
                        <Image
                            src={`${skill.src}`}
                            alt={`${skill.name}`}
                            width={50}
                            height={50}
                            data-tooltip-id={`tooltip-skills-${title}`}
                            data-tooltip-content={skill.name}
                            className={`${
                                skill.customTheme
                                    ? "[filter:_brightness(0)_saturate(100%)_invert(100%)_sepia(1%)_saturate(7500%)_hue-rotate(52deg)_brightness(115%)_contrast(100%);]"
                                    : ""
                            }`}
                        />
                    </motion.div>
                ))}
                <Tooltip
                    id={`tooltip-skills-${title}`}
                    style={{
                        backgroundColor: "#4f4f4f",
                        color: "#fff",
                    }}
                />
            </div>
        </div>
    );
}
