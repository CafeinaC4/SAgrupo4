import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const [bairro, setBairro] = useState('Monte verder')
const chaveAcesso = VXolp054ihsW3u

    return(
        <GlobalContext.Provider value={{usuarioLogado, bairro, setBairro}}>
            {children}
        </GlobalContext.Provider>
    )
}
