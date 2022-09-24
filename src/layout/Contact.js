import React, { useEffect } from "react";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import SectionTitle from "../components/SectionTitle";

// ✅ Data ------------------------------------------------------------------------------------------------------------
import myInformation from "../data/myInformation";

const Contact = ({ paddingTopToDiffer = "pt-10", heightToDiffer = "h-auto" }) => {
    useEffect(() => {
        document.title = `${myInformation.aboutSection.iAmWhat} | Contact`;
    }, []);
    return (
        <div
            className={`section_background_gradient box-border flex h-auto w-full flex-col items-center px-8 pt-16 pb-10 sm:px-12 md:flex-col lg:px-16 ${paddingTopToDiffer} ${heightToDiffer}`}
        >
            <SectionTitle title={"Contact with,Me"} />

            <div className="mt-5 flex h-full w-full flex-col rounded-lg bg-[rgba(255,255,255,0.3)] pt-10 pb-6 md:flex-row md:pt-14">
                <div className="hidden h-full w-full items-center justify-center md:flex md:h-full md:w-1/2">
                    <img className="w-[50%] min-w-[220px]" src="./Images/Contact/contact-1.png" alt="" />
                </div>

                <div className="box-border flex h-full w-full flex-col items-center gap-6 rounded-lg px-6 transition-all duration-300 md:w-1/2 md:gap-7 md:px-10">
                    <form
                        className="box-border flex h-full w-full flex-col items-center gap-6 "
                        action={myInformation.contactSection.formpreeWebsiteAPIKey}
                        method="POST"
                    >
                        <input
                            className="h-10 w-full rounded-md border border-secondary-color bg-[rgba(255,255,255,0.6)] pl-5 font-open-sans-font outline-none placeholder:text-sm placeholder:font-medium placeholder:text-secondary-color focus:bg-[rgba(255,255,255,0.8)]"
                            placeholder="Name"
                            type="text"
                            name="name"
                            autoComplete="off"
                            required
                        />
                        <input
                            className="h-10 w-full rounded-md border border-secondary-color bg-[rgba(255,255,255,0.6)] pl-5 font-open-sans-font outline-none placeholder:text-sm placeholder:font-medium placeholder:text-secondary-color focus:bg-[rgba(255,255,255,0.8)]"
                            placeholder="Email"
                            type="email"
                            name="email"
                            autoComplete="off"
                            required
                        />
                        <textarea
                            className="w-full rounded-md border border-secondary-color bg-[rgba(255,255,255,0.6)] py-4 pl-5 font-open-sans-font outline-none placeholder:text-sm placeholder:font-medium placeholder:text-secondary-color focus:bg-[rgba(255,255,255,0.8)]"
                            placeholder="Message..."
                            cols="30"
                            rows="4"
                            name="message"
                            required
                        ></textarea>
                        <div className="mt-2 flex w-full justify-end">
                            <button className="animate_button_main rounded-md bg-secondary-color px-9 py-2 font-rubik-font font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-[2px] hover:border hover:border-secondary-color hover:opacity-90 md:py-2">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
