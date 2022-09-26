import React, { useContext, useEffect } from "react";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Project";
import Skills from "./Skills";

// ✅ Data ------------------------------------------------------------------------------------------------------------
import myInformation from "../data/myInformation";
import { GlobalContext } from "../context/Store";

const Home = () => {
    const { setNavLinkActiveName } = useContext(GlobalContext);
    useEffect(() => {
        setNavLinkActiveName("/");
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
