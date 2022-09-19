import { createContext, useState } from "react";
const GlobalContext = createContext();

const Store = ({ children }) => {
    return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, Store };
