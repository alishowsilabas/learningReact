import React, { createContext } from "react";
import Filho from "./assets/components/Filho";
import ContextoUsuario from "./store/ContextoUsuario";

const App = () => {
  return (
    <ContextoUsuario>
      <Filho />
    </ContextoUsuario>
  );
};

export default App;
