import React, { useState } from "react";

// ✅ Components -----------------------------------------------------------------------------------------
import { Outlet, NavLink } from "react-router-dom";
import SingleHeaderNavItem from "./../components/SingleHeaderNavItem";

// ✅ Icons ----------------------------------------------------------------------------------------------
import { HiMenuAlt3 } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const Header = () => {
    // ✅ States / Variables -----------------------------------------------------------------------------------------
    const [openMenuOnMobile, setOpenMenuOnMobile] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);

    // ✅ Functions / Hooks -----------------------------------------------------------------------------------------
    function handleOpenMenuOnMobile() {
        document.body.style.overflow = "hidden";

        setCloseMenu(false);
        setOpenMenuOnMobile(true);
    }
    function handleCloseMenuOnMobile() {
        document.body.style.overflow = "visible";

        setCloseMenu(true);
        setTimeout(() => {
            setOpenMenuOnMobile(false);
        }, 500);
    }

    return (
        <>
            <div className="fixed top-0 z-50 flex h-14 w-full items-center justify-between overflow-hidden bg-secondary-color px-5 text-white md:px-12 lg:px-16">
                <div className="logo">
                    <img src="./Images/Logo.png" alt="" />
                </div>
                <div className="navs hidden h-full gap-8 font-open-sans-font text-lg font-medium md:flex md:gap-1">
                    <SingleHeaderNavItem toLink={"/"} headerItemName="Home" />
                    <SingleHeaderNavItem toLink={"about"} headerItemName="About Me" />
                    <SingleHeaderNavItem toLink={"skill"} headerItemName="Skills" />
                    <SingleHeaderNavItem toLink={"project"} headerItemName="Projects" />
                    <SingleHeaderNavItem toLink={"contact"} headerItemName="Contact" />
                </div>

                <div className="block md:hidden">
                    <HiMenuAlt3 className="block text-4xl md:hidden" onClick={handleOpenMenuOnMobile} />
                    {openMenuOnMobile && (
                        <div
                            className={`fixed left-0 top-0 h-screen w-screen bg-secondary-color ${
                                openMenuOnMobile && !closeMenu && "slide-in-right"
                            } ${closeMenu && "slide-out-right"}`}
                        >
                            <div className="flex h-14 w-full items-center justify-end px-7 text-white">
                                <ImCross className="text-2xl" onClick={handleCloseMenuOnMobile} />
                            </div>
                            <div className="navs_links box-border flex h-full flex-col items-center gap-10 pt-10 text-3xl font-semibold text-white">
                                <NavLink to={"/"}>
                                    <button
                                        onClick={handleCloseMenuOnMobile}
                                        className={`animate_bottom_border ${openMenuOnMobile && "slide-in-right-4s"}`}
                                    >
                                        Home
                                    </button>
                                </NavLink>
                                <NavLink to={"about"}>
                                    <button
                                        onClick={handleCloseMenuOnMobile}
                                        className={`animate_bottom_border ${openMenuOnMobile && "slide-in-right-5s"}`}
                                    >
                                        About Me
                                    </button>
                                </NavLink>
                                <NavLink to={"skill"}>
                                    <button
                                        onClick={handleCloseMenuOnMobile}
                                        className={`animate_bottom_border ${openMenuOnMobile && "slide-in-right-6s"}`}
                                    >
                                        Skills
                                    </button>
                                </NavLink>
                                <NavLink to={"project"}>
                                    <button
                                        onClick={handleCloseMenuOnMobile}
                                        className={`animate_bottom_border ${openMenuOnMobile && "slide-in-right-7s"}`}
                                    >
                                        Projects
                                    </button>
                                </NavLink>
                                <NavLink to={"contact"}>
                                    <button
                                        onClick={handleCloseMenuOnMobile}
                                        className={`animate_bottom_border ${openMenuOnMobile && "slide-in-right-8s"}`}
                                    >
                                        Contact
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Header;
