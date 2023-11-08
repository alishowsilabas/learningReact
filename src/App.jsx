import React, { useReducer, useRef } from "react";

const reducer = (prevState, action) => {
  if (action.type === "incrementa") {
    return {
      contador: prevState.contador + action.payload.valor,
    };
  }
  if (action.type === "reduzir") {
    return {
      contador: prevState.contador - action.payload.valor,
    };
  }
  return prevState;
};

const inititalState = {
  contador: 0,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, inititalState);
  const meuInput = useRef();

  const handleClickIncrementar = () => {
    const valor = Number(meuInput.current.value);
    dispatch({ type: "incrementa", payload: { valor } });
  };

  const handleClickReduzir = () => {
    const valor = Number(meuInput.current.value);
    dispatch({ type: "reduzir", payload: { valor } });
  };

  return (
    <div>
      <p>Contagem: {state.contador}</p>
      <input type="number" ref={meuInput} />
      <button onClick={handleClickIncrementar}>Incremente</button>
      <button onClick={handleClickReduzir}>Reduzir</button>
    </div>
  );
};

export default App;
