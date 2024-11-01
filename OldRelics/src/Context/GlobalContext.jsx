import React from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) =>{
  let algumaCoisa = "ola"

  return (
    <GlobalContext.Provider value={{algumaCoisa}}>
        {children}
    </GlobalContext.Provider>
  )
}