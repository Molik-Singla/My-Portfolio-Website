import React, { useContext } from "react";

// ✅ Context ------------------------------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components -----------------------------------------------------------------------------------------
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

// ✅ Icons ----------------------------------------------------------------------------------------------
import { BsInstagram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// ✅ Data ----------------------------------------------------------------------------------------------
import myInformation from "../data/myInformation";

const Home = () => {
    // ✅ States / Variables ------------------------------------------------------------------------------------------------------------
    const { textAnimationCustom, buttonAnimationCustom, imgAnimationCustom } = useContext(GlobalContext);

    return (
        <div className="section_background_gradient box-border flex h-full w-full flex-col justify-evenly px-8 pt-16 sm:px-12 md:h-[min(100vh,42rem)] md:flex-row lg:px-16">
            {/* 1 */}
            <div className="box flex h-full w-full flex-col items-start gap-7 pb-12 pt-3 text-white md:w-1/2 md:gap-4 md:pb-0 md:pt-12">
                <motion.div {...textAnimationCustom()} className="flex flex-col gap-0">
                    <p className="font-roboto-font text-4.5xl font-black md:text-5xl">Hi There</p>
                    <p className="font-roboto-font text-4xl font-black md:text-5xl">
                        I'm {myInformation.heroSection.myName.firstName}
                        <span className="text-tertiary-color">{myInformation.heroSection.myName.lastName}</span>
                    </p>
                </motion.div>

                <motion.div {...textAnimationCustom(0.08)} className="flex gap-1 font-open-sans-font text-lg font-semibold md:text-1.5xl">
                    I am a
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 70,
                            deleteSpeed: 40,
                            strings: myInformation.heroSection.iAmAWhat,
                        }}
                    />
                </motion.div>

                <motion.div className="social_links mt-8 flex gap-4 md:mt-8">
                    <motion.a {...textAnimationCustom(0.17)} rel="noopener" href={myInformation.heroSection.socialLinks.instaLink} target={"_blank"}>
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4405F] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                            <BsInstagram className="text-lg" />
                        </div>
                    </motion.a>

                    <motion.a {...textAnimationCustom(0.22)} rel="noopener" href={myInformation.heroSection.socialLinks.githubLink} target={"_blank"}>
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#222222] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                            <ImGithub className="text-lg" />
                        </div>
                    </motion.a>

                    <motion.a {...textAnimationCustom(0.27)} rel="noopener" href={myInformation.heroSection.socialLinks.fbLink} target={"_blank"}>
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B5999] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                            <FaFacebookSquare className="text-lg" />
                        </div>
                    </motion.a>

                    <motion.a
                        {...textAnimationCustom(0.32)}
                        rel="noopener"
                        href={myInformation.heroSection.socialLinks.linkedinLink}
                        target={"_blank"}
                    >
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1DA1F2] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                            <FaLinkedinIn className="text-lg" />
                        </div>
                    </motion.a>
                </motion.div>

                <NavLink to={"project"}>
                    <motion.button
                        {...buttonAnimationCustom(0.32)}
                        className="animate_button_main mt-1 rounded-lg border-white bg-secondary-color px-6 py-2 font-rubik-font text-lg font-semibold shadow-xl hover:border hover:border-secondary-color md:mt-2 md:px-7"
                    >
                        Check Projects
                    </motion.button>
                </NavLink>
            </div>

            {/* 2 */}
            <div className="flex h-full w-full items-center justify-center py-14 md:w-[40%] md:items-start">
                <motion.img
                    {...imgAnimationCustom(0.32, 0.32)}
                    className="w-[75%] rounded-full shadow-xl shadow-slate-500"
                    src="./Images/hero.png"
                    alt="NONE"
                />
            </div>
        </div>
    );
};

export default Home;
