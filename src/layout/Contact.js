import React from "react";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
    return (
        <div className="section_background_gradient box-border flex h-auto w-full flex-col items-center px-8 pt-10 sm:px-12 md:flex-col lg:px-16">
            <SectionTitle title={"Contact with,Me"} />

            <div className="flex h-full w-full flex-col md:flex-row ">
                <div className="hidden h-1/2 w-full md:block md:w-1/2">
                    <lottie-player
                        src="https://assets1.lottiefiles.com/packages/lf20_mwawjro9.json"
                        background="transparent"
                        speed="0.8"
                        style={{ width: "80%", height: "80%" }}
                        loop
                        autoplay
                    ></lottie-player>
                </div>
                <div className="mt-10 box-border flex h-full w-full flex-col items-center gap-6 rounded-lg bg-[rgba(255,255,255,0.28)] py-10 transition-all duration-300 hover:-translate-y-[2px] hover:bg-[rgba(255,255,255,0.4)] md:w-1/2 md:gap-7">
                    <input
                        className="h-8 w-4/5 rounded-md bg-[rgba(255,255,255,0.6)] pl-5 font-open-sans-font outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-secondary-color md:w-2/3"
                        placeholder="Name"
                        type="text"
                        name=""
                        id=""
                    />
                    <input
                        className="h-8 w-4/5 rounded-md bg-[rgba(255,255,255,0.6)] pl-5 font-open-sans-font outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-secondary-color md:w-2/3"
                        placeholder="Email"
                        type="email"
                        name=""
                        id=""
                    />
                    <textarea
                        className="w-4/5 rounded-md bg-[rgba(255,255,255,0.6)] py-4 pl-5 font-open-sans-font outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-secondary-color md:w-2/3"
                        placeholder="Message..."
                        cols="30"
                        rows="2"
                    ></textarea>
                    <div className="mt-2 flex w-4/5 justify-end md:w-2/3">
                        <button className="rounded-md bg-secondary-color px-8 py-2 font-rubik-font font-semibold text-white transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90 md:py-1">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
