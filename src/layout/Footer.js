import React from "react";

// ✅ Icons ----------------------------------------------------------------------------------------------
import { BsInstagram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-between gap-5 bg-secondary-color px-12 py-4 md:flex-row md:items-center md:gap-0">
            <p className="font-roboto-font text-xl text-white">
                Designed by <span className="text-tertiary-color">Molik Singla</span>
            </p>
            <div className="social_links flex gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                    <BsInstagram className="text-lg text-black" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                    <ImGithub className="text-lg text-black" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                    <FaFacebookSquare className="text-lg text-black" />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                    <FaLinkedinIn className="text-lg text-black" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
