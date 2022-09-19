import React from "react";
import Typewriter from "typewriter-effect";

import { BsInstagram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    return (
        <div className="section_background_gradient box-border flex h-full w-full flex-col bg-red-400 px-5 pt-16 md:h-[clamp(37rem,100vh,44rem)] md:flex-row  md:px-12 lg:px-16">
            {/* 1 */}
            <div className="box flex h-full w-full flex-col items-start gap-5 pt-6 text-white md:w-1/2 md:pt-12">
                <div className="flex flex-col gap-0">
                    <p className="font-roboto-font text-4.5xl font-black md:text-5xl">Hi There</p>
                    <p className="font-roboto-font text-4.5xl font-black md:text-5xl">
                        I'm Molik <span className="text-tertiary-color">Singla</span>
                    </p>
                </div>

                <p className="flex gap-1 font-open-sans-font text-xl font-semibold md:text-2xl">
                    I am a
                    <Typewriter
                        onInit={(typewriter) => {
                            console.log(typewriter);
                            typewriter.typeString("Full Stack Web Developer").pauseFor(200).deleteAll().start();
                        }}
                        options={{ loop: true, delay: 100 }}
                    />
                </p>

                <div className="social_links mt-8 flex gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E4405F] shadow-xl transition-all duration-200 hover:-translate-y-[1px]">
                        <BsInstagram className="text-lg" />
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#222222] shadow-xl transition-all duration-200 hover:-translate-y-[1px]">
                        <ImGithub className="text-lg" />
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B5999] shadow-xl transition-all duration-200 hover:-translate-y-[1px]">
                        <FaFacebookSquare className="text-lg" />
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1DA1F2] shadow-xl transition-all duration-200 hover:-translate-y-[1px]">
                        <FaLinkedinIn className="text-lg" />
                    </div>
                </div>
                <button className="mt-2 rounded-lg border-white bg-secondary-color px-6 py-3 font-rubik-font text-lg shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:opacity-90 md:mt-1 md:px-7">
                    Check Projects
                </button>
            </div>
            {/* 2 */}
            <div className="flex h-full w-full items-center justify-center py-24 md:w-[40%] md:items-start">
                <lottie-player
                    src="https://assets9.lottiefiles.com/private_files/lf30_ft0cqvpu.json"
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
