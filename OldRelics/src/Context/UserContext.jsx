import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const UserContext = createContext();

// Provedor do contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Valor inicial como null, pode ser um objeto vazio ou null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useUser = () => {
  return useContext(UserContext);
};