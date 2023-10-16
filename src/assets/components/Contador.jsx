import React, { useState } from "react";

const Contador = ({valorInicial}) => {

    const [contador, setContador] = useState(valorInicial);

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar {contador}
      </button>
    </div>
  );
};

export default Contador;
