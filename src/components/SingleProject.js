import React, { useContext } from "react";

// ✅ Context ------------------------------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components------------------------------------------------------------------------------------------------------------
import { motion } from "framer-motion";

// ✅ Icons------------------------------------------------------------------------------------------------------------
import { ImGithub } from "react-icons/im";

const SingleProject = ({ image, projectTitle, projectDescription, animateDelay, githubLink = null, demoLink = null }) => {
    // ✅ States / Variables ------------------------------------------------------------------------------------------------------------
    const { imgAnimationCustom } = useContext(GlobalContext);

    return (
        <motion.div
            {...imgAnimationCustom(0.3, animateDelay)}
            className="single_project flex h-auto w-72 flex-col gap-3 rounded-lg border-2 border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <img className="h-44 rounded-lg object-cover brightness-95 transition-all duration-300 hover:brightness-100" src={image} alt="Project" />

            <p className="font-open-sans-font text-xl font-semibold">{projectTitle}</p>
            <p className="font-open-sans-font text-base font-medium">
                {projectDescription?.length > 55 ? `${projectDescription.slice(1, 55)}...` : `${projectDescription}.`}
            </p>
            <div className="project_links mt-3 flex gap-4">
                <a rel="noopener" className={`${!githubLink && "hover:cursor-not-allowed"}`} href={githubLink} target="_blank">
                    <div className="flex h-9 w-11 items-center justify-center rounded-sm bg-[#222222] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[2px]">
                        <ImGithub className="text-lg text-white" />
                    </div>
                </a>

                <a rel="noopener" className={`${!demoLink && "hover:cursor-not-allowed"}`} href={demoLink} target="_blank">
                    <button className="animate_button_main flex h-9 items-center justify-center rounded-md bg-tertiary-color px-5 font-rubik-font font-semibold text-black shadow-lg shadow-gray-200 hover:border hover:border-secondary-color">
                        Demo
                    </button>
                </a>
            </div>
        </motion.div>
    );
};

export default SingleProject;
