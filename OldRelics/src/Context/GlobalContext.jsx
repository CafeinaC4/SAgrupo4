import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [item, setItem] = useState([]); // Adicionando o estado de items

  return (
    <GlobalContext.Provider value={{ funcionarios, setFuncionarios, item, setItem }}>
      {children}
    </GlobalContext.Provider>
  );
};
