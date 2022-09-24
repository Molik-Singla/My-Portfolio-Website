import React from "react";

import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Project from "./Project";
import Skills from "./Skills";

import { Outlet } from "react-router-dom";

const Home = () => {
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
