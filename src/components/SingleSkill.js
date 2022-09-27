import React, { useContext } from "react";

// ✅ Context ------------------------------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import { motion } from "framer-motion";

const SingleSkill = ({ image, skillName, animateDelay }) => {
    // ✅ States / Variables ------------------------------------------------------------------------------------------------------------
    const { imgAnimationCustom } = useContext(GlobalContext);

    return (
        <motion.div
            {...imgAnimationCustom(0.1, animateDelay)}
            key={Math.random()}
            className="flex h-28 w-[8.5rem] flex-col items-center gap-2 rounded-lg bg-secondary-color pt-3 font-open-sans-font text-xl font-bold text-white shadow-primary-shadow transition-all duration-300 hover:-translate-y-[2px] md:w-40"
        >
            <div className="flex h-1/2 w-full items-center justify-center">
                <img className="h-full" src={image} alt="Skill" />
            </div>
            <div className="flex h-1/2 w-full items-center justify-center">
                <p className="tracking-wider">{skillName}</p>
            </div>
        </motion.div>
    );
};

export default SingleSkill;
