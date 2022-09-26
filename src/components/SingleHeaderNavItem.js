import React, { useContext } from "react";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/Store";

const HeaderNavItem = ({ toLink, headerItemName }) => {
    const { navLinkActiveName } = useContext(GlobalContext);
    return (
        <NavLink to={toLink} className={`${toLink === navLinkActiveName && "text-tertiary-color"} transition-all duration-300`}>
            <p className="animate_bottom_border increase_letter_spacing box-border flex h-full cursor-pointer items-center px-4">
                {headerItemName}
                <span className=""></span>
            </p>
        </NavLink>
    );
};

export default HeaderNavItem;
