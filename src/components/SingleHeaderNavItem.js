import React from "react";

import { NavLink } from "react-router-dom";

const HeaderNavItem = ({ toLink, headerItemName }) => {
    return (
        <NavLink to={toLink} className={({ isActive }) => (isActive ? "text-tertiary-color" : "")}>
            <p className="button_animate increase_letter_spacing box-border flex h-full cursor-pointer items-center px-4">
                {headerItemName}
                <span className=""></span>
            </p>
        </NavLink>
    );
};

export default HeaderNavItem;
