import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
// const chaveAcesso = VXolp054ihsW3u

    return(
        <GlobalContext.Provider value={{}}>
            {children}
        </GlobalContext.Provider>
    )
}
