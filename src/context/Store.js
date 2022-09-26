import { createContext, useState } from "react";
const GlobalContext = createContext();

const Store = ({ children }) => {
    const [navLinkActiveName, setNavLinkActiveName] = useState("home");
    return <GlobalContext.Provider value={{ navLinkActiveName, setNavLinkActiveName }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, Store };
