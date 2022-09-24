import React, { useEffect } from "react";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import SectionTitle from "../components/SectionTitle";

// ✅ Icon ------------------------------------------------------------------------------------------------------------
import { RiArrowDropRightLine } from "react-icons/ri";

// ✅ Data ------------------------------------------------------------------------------------------------------------
import myInformation from "../data/myInformation";

const About = ({ paddingTopToDiffer = "pt-10", heightToDiffer = "h-auto" }) => {
    useEffect(() => {
        document.title = `${myInformation.aboutSection.iAmWhat} | About`;
    }, []);
    return (
        <div
            className={`box-border flex h-auto w-full flex-col bg-white px-8 pb-20 sm:px-12 md:flex-col lg:px-16 ${paddingTopToDiffer} ${heightToDiffer}`}
        >
            <div className="flex w-full flex-col items-center gap-4">
                <SectionTitle title={"About,Me"} />
                <p className="text-center font-roboto-font text-xl font-light text-gray-600 md:text-1.5xl">
                    {myInformation.aboutSection.aboutMeTitle}
                </p>
            </div>
            <div className="box-border flex h-full w-full flex-col md:flex-row md:pt-6">
                {/* 1 */}
                <div className="flex h-full w-full items-center justify-center pt-12 pb-4 md:w-1/2 md:py-0">
                    <lottie-player
                        src="https://assets6.lottiefiles.com/packages/lf20_w51pcehl.json"
                        background="transparent"
                        speed="0.8"
                        style={{ width: "100%", height: "100%" }}
                        loop
                        autoplay
                    ></lottie-player>
                </div>

                {/* 2 */}
                <div className="box-border w-full pt-5 md:w-1/2">
                    <p className="font-open-sans-font text-2xl font-bold">I'm {myInformation.aboutSection.iAmWhat}</p>
                    <p className="mt-2 w-full font-open-sans-font font-medium leading-7 tracking-normal md:mt-4 md:w-[85%] md:tracking-wide">
                        {myInformation.aboutSection.aboutMeDescription}
                    </p>
                    <div className="mt-9">
                        <button className="animate_button_main mt-2 flex items-center justify-center rounded-lg border border-transparent bg-secondary-color px-4 py-1 pl-10 font-rubik-font text-lg text-white shadow-lg hover:border-secondary-color md:mt-1 md:pr-6">
                            Resume
                            <RiArrowDropRightLine className="ml-1 text-4xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
