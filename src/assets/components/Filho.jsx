import React, { useContext } from "react";
import { useContextoUsuario } from "../../store/ContextoUsuario";

const Filho = () => {
 const contexto = useContextoUsuario();

  return (
    <div>
      {contexto.nome} {contexto.sobrenome}
    </div>
  );
};

export default Filho;
