import React from "react";

import Footer from "./layout/Footer";
import Header from "./layout/Header";

import Home from "./layout/Home";
import About from "./layout/About";
import Skills from "./layout/Skills";
import Project from "./layout/Project";
import Contact from "./layout/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./layout/ErrorPage";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About paddingTopToDiffer={"pt-16"} heightToDiffer="h-auto min-h-screen" />} />
                <Route path="skill" element={<Skills paddingTopToDiffer={"pt-16"} heightToDiffer="h-auto min-h-screen" />} />
                <Route path="project" element={<Project paddingTopToDiffer={"pt-16"} heightToDiffer="h-auto min-h-screen" />} />
                <Route path="contact" element={<Contact paddingTopToDiffer={"pt-16"} heightToDiffer="h-auto min-h-screen" />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
