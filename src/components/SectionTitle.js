import React from "react";

const SectionTitle = ({ title }) => {
    return (
        <div className="relative font-open-sans-font text-3xl font-bold text-secondary-color md:text-3.5xl">
            <span>{title.split(",")[0]}</span> <span className="text-tertiary-color">{title.split(",")[1]}</span>
        </div>
    );
};

export default SectionTitle;
