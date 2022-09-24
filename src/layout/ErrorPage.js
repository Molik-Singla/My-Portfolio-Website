import React, { useEffect } from "react";

// ✅ Components ------------------------------------------------------------------------------------------------------------
import { Link } from "react-router-dom";

const ErrorPage = () => {
    useEffect(() => {
        document.title = "Got Lost! Page not Found";
    }, []);
    return (
        <div
            className={`box-border flex h-auto min-h-screen w-full flex-col justify-center gap-10 bg-white px-8 pb-20 pt-16 sm:px-12 md:flex-col lg:px-16`}
        >
            <img src="./Images/404-page.webp" alt="" />
            <div className="flex w-full justify-center">
                <Link to={"/"}>
                    <button className="animate_button_main px-py-2 rounded-md border border-transparent bg-secondary-color px-12 py-2 font-open-sans-font text-lg font-semibold text-white hover:border-secondary-color">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
