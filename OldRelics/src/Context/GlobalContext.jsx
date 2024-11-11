import React from 'react'
import { createContext, useState } from 'react'


export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
  // const [FuncionarioLogado, setFuncionarioLogado] = useState("Existo")
  const [funcionarios, setFuncionarios] = useState([])

  return (
    <GlobalContext.Provider value={{funcionarios, setFuncionarios}}>
        {children}
    </GlobalContext.Provider>
  )
}

