import React from "react";

// ✅ Icons ----------------------------------------------------------------------------------------------
import { BsInstagram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// ✅ Data ----------------------------------------------------------------------------------------------
import myInformation from "../data/myInformation";

const Footer = () => {
    return (
        <div className="flex h-auto w-full flex-col items-center justify-between gap-5 bg-secondary-color px-12 py-4 md:flex-row md:items-center md:gap-0">
            <p className="font-roboto-font text-xl text-white">
                Designed by <span className="text-tertiary-color">Molik Singla</span>
            </p>
            <div className="social_links flex gap-3 text-white">
                <a rel="noopener" href={myInformation.heroSection.socialLinks.instaLink} target={"_blank"}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4405F] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                        <BsInstagram className="text-lg" />
                    </div>
                </a>

                <a rel="noopener" href={myInformation.heroSection.socialLinks.githubLink} target={"_blank"}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#222222] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                        <ImGithub className="text-lg" />
                    </div>
                </a>

                <a rel="noopener" href={myInformation.heroSection.socialLinks.fbLink} target={"_blank"}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B5999] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                        <FaFacebookSquare className="text-lg" />
                    </div>
                </a>

                <a rel="noopener" href={myInformation.heroSection.socialLinks.linkedinLink} target={"_blank"}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DA1F2] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                        <FaLinkedinIn className="text-lg" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Footer;
