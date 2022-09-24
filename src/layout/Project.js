import React from "react";
import SectionTitle from "../components/SectionTitle";
import SingleProject from "../components/SingleProject";

import allMyProjects from "./../data/projects";

const Project = ({ paddingTopToDiffer = "pt-10", heightToDiffer = "h-auto" }) => {
    return (
        <div
            className={`box-border flex h-full w-full flex-col px-8 pt-16 pb-20 sm:px-12 md:h-auto lg:px-16 ${paddingTopToDiffer} ${heightToDiffer}`}
        >
            <div className="flex w-full flex-col items-center gap-4 text-white">
                <SectionTitle title={"Projects,Made"} />
            </div>

            {/* 2 */}
            <div className="all_projects mt-8 flex h-auto w-full flex-row flex-wrap justify-center gap-6 gap-y-9">
                {allMyProjects.map((singleElement) => {
                    return (
                        <SingleProject
                            key={Math.random()}
                            image={singleElement.image}
                            projectTitle={singleElement.title}
                            projectDescription={singleElement.description}
                            githubLink={singleElement.githubLink}
                            demoLink={singleElement.demoLink}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Project;
