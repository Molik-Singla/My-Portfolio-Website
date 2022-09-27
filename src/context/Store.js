import { createContext, useState } from "react";
const GlobalContext = createContext();

const Store = ({ children }) => {
    const [navLinkActiveName, setNavLinkActiveName] = useState("home");

    // Animation Functions ( Framer Motion )
    function textAnimationCustom(delay = null) {
        return {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: delay || 0,
            },
        };
    }
    function buttonAnimationCustom(delay = null) {
        return {
            initial: {
                y: "100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: delay || 0,
            },
        };
    }
    function imgAnimationCustom(duration = 0.5, delay = 0) {
        return {
            initial: {
                scale: 0.2,
                opacity: 0,
            },
            whileInView: {
                scale: 1,
                opacity: 1,
            },
            transition: {
                delay: delay,
                duration: duration,
                type: "tween",
            },
        };
    }

    return (
        <GlobalContext.Provider
            value={{
                navLinkActiveName,
                setNavLinkActiveName,
                textAnimationCustom,
                buttonAnimationCustom,
                imgAnimationCustom,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, Store };
