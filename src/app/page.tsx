import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/layout/hero/Hero";
import AboutMe from "@/components/layout/aboutMe/AboutMe";
// import Skills from "@/components/layout/skills/Skills";
// import Projects from "@/components/layout/projects/Projects";
// import Footer from "@/components/layout/footer/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            {/* <Skills />
            <Projects />
            <Footer /> */}
        </>
    );
}
