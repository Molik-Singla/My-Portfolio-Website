import React from "react";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Project from "./layout/Project";
import Skills from "./layout/Skills";

const App = () => {
    return (
        <div>
            <Header />
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
