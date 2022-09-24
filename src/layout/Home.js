import React, { useEffect } from "react";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Project";
import Skills from "./Skills";

// ✅ Data ------------------------------------------------------------------------------------------------------------
import myInformation from "../data/myInformation";

const Home = () => {
    useEffect(() => {
        document.title = `${myInformation.aboutSection.iAmWhat} | Home`;
    }, []);
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
        </>
    );
};

export default Home;
