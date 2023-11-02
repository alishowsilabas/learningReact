import React, { useContext } from "react";
import { Contexto } from "../../App";


const Filho = () => {
  const contexto = useContext(Contexto);
  console.log(contexto);

  return <div>{contexto.nome} {contexto.sobrenome}</div>;
};

export default Filho;
