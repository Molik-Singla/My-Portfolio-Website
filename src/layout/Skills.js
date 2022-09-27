import React, { useEffect, useContext, useRef } from "react";

// ✅ Context ------------------------------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import { useLocation } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import SingleSkill from "../components/SingleSkill";

// ✅ Data ------------------------------------------------------------------------------------------------------------
import skillsArray from "./../data/skills";
import myInformation from "../data/myInformation";

const Skills = ({ paddingTopToDiffer = "pt-10", heightToDiffer = "h-auto" }) => {
    // ✅ States / Variables ------------------------------------------------------------------------------------------------------------
    const { setNavLinkActiveName } = useContext(GlobalContext);
    const { pathname } = useLocation();
    const scrollToTop = useRef();

    let delayTime = 0;

    // ✅ useEffect ------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        if (pathname === "/skill") scrollToTop.current.scrollIntoView({ behavior: "smooth" });
        setNavLinkActiveName("skill");
        document.title = `${myInformation.aboutSection.iAmWhat} | Skills`;
    }, []);
    return (
        <div
            ref={scrollToTop}
            className={`section_background_gradient box-border flex w-full flex-col items-center px-8 pb-20 pt-16 sm:px-12 md:flex-col lg:px-16 ${paddingTopToDiffer} ${heightToDiffer}`}
        >
            <div className="flex w-full flex-col items-center gap-4 text-white">
                <SectionTitle title={"Skills &,Abilities"} />
            </div>
            <div className="mt-10 flex h-auto w-full flex-row flex-wrap justify-center gap-5 md:w-[80%] md:gap-10">
                {skillsArray.map((single) => {
                    delayTime += 0.05;
                    return <SingleSkill key={Math.random()} skillName={single.skillName} image={single.image} animateDelay={delayTime} />;
                })}
            </div>
        </div>
    );
};

export default Skills;
