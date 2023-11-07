import React from "react";
import { useContextoUsuario } from "../../store/ContextoUsuario";

const Neto = () => {
  console.log("Component Neto");
  const { contagem, setContagem } = useContextoUsuario();

  return (
    <div>
      <button onClick={() => setContagem((c) => c + 1)}>
        Contagem {contagem}
      </button>
    </div>
  );
};

export default Neto;
