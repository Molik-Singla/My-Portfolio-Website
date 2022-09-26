import React, { useEffect, useContext } from "react";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import SectionTitle from "../components/SectionTitle";
import SingleSkill from "../components/SingleSkill";

// ✅ Data ------------------------------------------------------------------------------------------------------------
import skillsArray from "./../data/skills";
import myInformation from "../data/myInformation";
import { GlobalContext } from "../context/Store";

const Skills = ({ paddingTopToDiffer = "pt-10", heightToDiffer = "h-auto" }) => {
    const { setNavLinkActiveName } = useContext(GlobalContext);

    useEffect(() => {
        setNavLinkActiveName("skill");
        document.title = `${myInformation.aboutSection.iAmWhat} | Skills`;
    }, []);
    return (
        <div
            className={`section_background_gradient box-border flex w-full flex-col items-center px-8 pb-20 pt-16 sm:px-12 md:flex-col lg:px-16 ${paddingTopToDiffer} ${heightToDiffer}`}
        >
            <div className="flex w-full flex-col items-center gap-4 text-white">
                <SectionTitle title={"Skills &,Abilities"} />
            </div>
            <div className="mt-10 flex h-auto w-full flex-row flex-wrap justify-center gap-5 md:w-[80%] md:gap-10">
                {skillsArray.map((single) => {
                    return <SingleSkill key={Math.random()} skillName={single.skillName} image={single.image} />;
                })}
            </div>
        </div>
    );
};

export default Skills;
