import React, { createContext } from "react";
import Filho from "./assets/components/Filho";

export const Contexto = createContext();
console.log(Contexto);

const App = () => {
  return (
    <Contexto.Provider value={{nome: "João", sobrenome: "Morais"}}>
      <Filho />
    </Contexto.Provider>
  );
};

export default App;
