import React, { useState } from "react";

const Contador = () => {
  // const [contador1, setContador1] = useState(0)
  // const [contador2, setContador2] = useState(10)

  const [estado, setEstado] = useState({
    contador1: 0,
    contador2: 10,
  });

  const incrementaContador1 = () => {
    setEstado({
      ...estado, //necessario para criar uma copia do estado anterior e posterior a isso só alterar o especificado
      contador1: estado.contador1 + 1,
    });
  };

  const incrementaContador2 = () => {
    setEstado({
      ...estado, //necessario para criar uma copia do estado anterior e posterior a isso só alterar o especificado
      contador2: estado.contador2 + 1,
    });
  };

  return (
    <div>
      <button onClick={incrementaContador1}>
        Incrementar {estado.contador1}
      </button>
      <button onClick={incrementaContador2}>
        Incrementar {estado.contador2}
      </button>
    </div>
  );
};

export default Contador;
