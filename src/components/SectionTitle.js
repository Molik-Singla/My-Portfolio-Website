import React, { useContext } from "react";

// ✅ Context ------------------------------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import { motion } from "framer-motion";

const SectionTitle = ({ title }) => {
    // ✅ States / Variables ------------------------------------------------------------------------------------------------------------
    const { textAnimationCustom } = useContext(GlobalContext);

    return (
        <motion.div {...textAnimationCustom()} className="relative font-open-sans-font text-3xl font-bold text-secondary-color md:text-3.5xl">
            <span>{title.split(",")[0]}</span> <span className="text-tertiary-color">{title.split(",")[1]}</span>
        </motion.div>
    );
};

export default SectionTitle;
