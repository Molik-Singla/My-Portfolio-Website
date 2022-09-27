import React, { useContext, useEffect } from "react";

// ✅ Context ------------------------------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Project";
import Skills from "./Skills";

// ✅ Data ------------------------------------------------------------------------------------------------------------
import myInformation from "../data/myInformation";

const Home = () => {
    // ✅ States / Variables ------------------------------------------------------------------------------------------------------------
    const { setNavLinkActiveName } = useContext(GlobalContext);

    // ✅ useEffect ------------------------------------------------------------------------------------------------------------
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
