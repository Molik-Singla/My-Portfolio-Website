import React, { useContext, useEffect, useRef } from "react";

// ✅ Context ------------------------------------------------------------------------------------------------------------
import { GlobalContext } from "../context/Store";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

// ✅ Icon ------------------------------------------------------------------------------------------------------------
import { RiArrowDropRightLine } from "react-icons/ri";

// ✅ Data ------------------------------------------------------------------------------------------------------------
import myInformation from "../data/myInformation";

const About = ({ paddingTopToDiffer = "pt-10", heightToDiffer = "h-auto" }) => {
    // ✅ States / Variables ------------------------------------------------------------------------------------------------------------
    const { setNavLinkActiveName, textAnimationCustom, buttonAnimationCustom, imgAnimationCustom } = useContext(GlobalContext);
    const { pathname } = useLocation();
    const scrollToTop = useRef();

    // ✅ useEffect ------------------------------------------------------------------------------------------------------------
    useEffect(() => {
        if (pathname === "/about") scrollToTop.current.scrollIntoView({ behavior: "smooth" });

        setNavLinkActiveName("about");
        document.title = `${myInformation.aboutSection.iAmWhat} | About`;
    }, []);

    return (
        <div
            ref={scrollToTop}
            className={`box-border flex h-auto w-full flex-col bg-white px-8 pb-20 sm:px-12 md:flex-col lg:px-16 ${paddingTopToDiffer} ${heightToDiffer}`}
        >
            <div className="flex w-full flex-col items-center gap-4">
                <SectionTitle title={"About,Me"} />
                <motion.p {...textAnimationCustom(0.1)} className="text-center font-roboto-font text-xl font-light text-gray-600 md:text-1.5xl">
                    {myInformation.aboutSection.aboutMeTitle}
                </motion.p>
            </div>
            <div className="box-border flex h-full w-full flex-col md:flex-row md:pt-6">
                {/* 1 */}
                <motion.div {...imgAnimationCustom(0.35)} className="flex h-full w-full items-center justify-center pt-12 pb-4 md:w-1/2 md:py-0">
                    <lottie-player
                        src="https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json"
                        background="transparent"
                        speed="0.8"
                        style={{ width: "100%", height: "100%" }}
                        loop
                        autoplay
                    ></lottie-player>
                </motion.div>

                {/* 2 */}
                <div className="box-border w-full pt-5 md:w-1/2">
                    <motion.p {...textAnimationCustom(0.2)} className="font-open-sans-font text-2xl font-bold">
                        I'm {myInformation.aboutSection.iAmWhat}
                    </motion.p>
                    <motion.p
                        {...textAnimationCustom(0.27)}
                        className="mt-2 w-full font-open-sans-font font-medium leading-7 tracking-normal md:mt-4 md:w-[85%] md:tracking-wide"
                    >
                        {myInformation.aboutSection.aboutMeDescription}
                    </motion.p>
                    <div className="mt-9">
                        <a href={"./resume.pdf"} rel="noopener" target="_blank">
                            <motion.button
                                {...buttonAnimationCustom(0.4)}
                                className="animate_button_main mt-2 flex items-center justify-center rounded-lg border border-transparent bg-secondary-color px-4 py-1 pl-10 font-rubik-font text-lg text-white shadow-lg hover:border-secondary-color md:mt-1 md:pr-6"
                            >
                                Resume
                                <RiArrowDropRightLine className="ml-1 text-4xl" />
                            </motion.button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
