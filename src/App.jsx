import React from "react";
import ContextoUsuario from "./store/ContextoUsuario";
import Filho from "./assets/components/Filho";

const App = () => {
  console.log("Component App");
  return (
    <ContextoUsuario>
      <Filho />
    </ContextoUsuario>
  );
};

export default App;
