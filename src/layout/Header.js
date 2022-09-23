import React, { useState } from "react";

// ✅ Components -----------------------------------------------------------------------------------------
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
        <div className="fixed top-0 z-50 flex h-14 w-full items-center justify-between overflow-hidden bg-secondary-color px-5 text-white md:px-12 lg:px-16">
            <div className="logo">
                <img src="./Images/Logo.png" alt="" />
            </div>
            <div className="navs hidden h-full gap-8 font-open-sans-font font-medium md:flex md:gap-1">
                <p className="increase_letter_spacing box-border flex h-full cursor-pointer items-center rounded-full border-white px-4 transition-all duration-150 hover:border-b-[3px]">
                    Home
                </p>
                <p className="increase_letter_spacing box-border flex h-full cursor-pointer items-center rounded-full border-white px-4 transition-all duration-150 hover:border-b-[3px]">
                    About Me
                </p>
                <p className="increase_letter_spacing box-border flex h-full cursor-pointer items-center rounded-full border-white px-4 transition-all duration-150 hover:border-b-[3px]">
                    Skills
                </p>
                <p className="increase_letter_spacing box-border flex h-full cursor-pointer items-center rounded-full border-white px-4 transition-all duration-150 hover:border-b-[3px]">
                    Projects
                </p>
                <p className="increase_letter_spacing box-border flex h-full cursor-pointer items-center rounded-full border-white px-4 transition-all duration-150 hover:border-b-[3px]">
                    Contact
                </p>
            </div>

            <div className="block md:hidden">
                <HiMenuAlt3 className="block text-4xl md:hidden" onClick={handleOpenMenuOnMobile} />
                {openMenuOnMobile && (
                    <div
                        className={`fixed left-0 top-0 h-screen w-screen bg-secondary-color ${openMenuOnMobile && !closeMenu && "slide-in-right"} ${
                            closeMenu && "slide-out-right"
                        }`}
                    >
                        <div className="flex h-14 w-full items-center justify-end px-7 text-white">
                            <ImCross className="text-2xl" onClick={handleCloseMenuOnMobile} />
                        </div>
                        <div className="navs_links box-border flex h-full flex-col items-center gap-12 pt-14 text-4xl font-semibold text-white">
                            <p className={`${openMenuOnMobile && "slide-in-right-4s"}`}>Home</p>
                            <p className={`${openMenuOnMobile && "slide-in-right-5s"}`}>About Me</p>
                            <p className={`${openMenuOnMobile && "slide-in-right-6s"}`}>Contact</p>
                            <p className={`${openMenuOnMobile && "slide-in-right-7s"}`}>Services</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
