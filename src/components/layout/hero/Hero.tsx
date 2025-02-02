import * as motion from "motion/react-client";
import { BackgroundBeamsWithCollision } from "@/components/ui/backgroundBeamsWithCollision/BackgroundBeamsWithCollision";
import { TextGenerateEffect } from "@/components/ui/textGenerateEffect/TextGenerateEffect";
import ContactMeBtn from "@/components/ui/contactMeBtn/ContactMeBtn";

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
        <section
            id="home"
            className="relative w-full text-white bg-black h-screen rounded-lg"
        >
            <BackgroundBeamsWithCollision className="flex justify-center items-center w-full h-screen bg-black bg-grid-light-blue/[0.4]">
                <div className="absolute inset-0 flex justify-center items-center bg-black [mask-image:linear-gradient(0deg,_rgba(0,0,0,1)_30%,_rgba(255,255,255,0)_100%)]"></div>
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
                        <ContactMeBtn />
                    </motion.div>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
}
