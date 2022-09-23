import React from "react";

// ✅ Components -----------------------------------------------------------------------------------------
import Typewriter from "typewriter-effect";

// ✅ Icons ----------------------------------------------------------------------------------------------
import { BsInstagram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    return (
        <div className="section_background_gradient box-border flex h-full w-full flex-col px-8 pt-16 sm:px-12 md:h-[min(100vh,710px)] md:flex-row lg:px-16">
            {/* 1 */}
            <div className="box flex h-full w-full flex-col items-start gap-7 pt-3 text-white md:w-1/2 md:gap-4 md:pt-12">
                <div className="flex flex-col gap-0">
                    <p className="font-roboto-font text-4.5xl font-black md:text-5xl">Hi There</p>
                    <p className="font-roboto-font text-4xl font-black md:text-5xl">
                        I'm Molik <span className="text-tertiary-color">Singla</span>
                    </p>
                </div>

                <div className="flex gap-1 font-open-sans-font text-lg font-semibold md:text-1.5xl">
                    I am a
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            strings: ["Full Stack Web Developer", "MERN Stack Developer"],
                        }}
                    />
                </div>

                <div className="social_links mt-8 flex gap-4 md:mt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4405F] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                        <BsInstagram className="text-lg" />
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#222222] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                        <ImGithub className="text-lg" />
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B5999] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                        <FaFacebookSquare className="text-lg" />
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1DA1F2] shadow-2xl shadow-black transition-all duration-200 hover:-translate-y-[1px]">
                        <FaLinkedinIn className="text-lg" />
                    </div>
                </div>
                <button className="mt-1 rounded-lg border-white bg-secondary-color px-6 py-2 font-rubik-font text-lg shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90 md:mt-2 md:px-7">
                    Check Projects
                </button>
            </div>
            {/* 2 */}
            <div className="flex h-full w-full items-center justify-center py-28 md:w-[40%] md:items-start">
                <lottie-player
                    // src="https://assets9.lottiefiles.com/private_files/lf30_ft0cqvpu.json"
                    // src="https://assets10.lottiefiles.com/private_files/lf30_bkqawjob.json"
                    src="https://assets8.lottiefiles.com/packages/lf20_M7zf6YI9dl.json"
                    background="transparent"
                    speed="0.8"
                    style={{ width: "100%", height: "100%" }}
                    loop
                    autoplay
                ></lottie-player>
            </div>
        </div>
    );
};

export default Home;
