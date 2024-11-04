import React from 'react'
import { createContext } from 'react'


export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
  // const [pessoa, setPessoa] = useState("Funcionario")
  const[funcionarios, setFuncionarios] = useState([])

  return (
    <GlobalContext.Provider value={{funcionarios, setFuncionarios}}>
        {children}
    </GlobalContext.Provider>
  )
}