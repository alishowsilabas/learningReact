import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const Contexto = createContext();

const ContextoUsuario = ({children}) => {
  return (
    <Contexto.Provider value={{ nome: "João", sobrenome: "Morais" }}>
      {children}
    </Contexto.Provider>
  );
};

export const useContextoUsuario = () => useContext(Contexto);
export default ContextoUsuario;
