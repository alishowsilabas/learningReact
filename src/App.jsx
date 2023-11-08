import React, { useReducer, useRef } from "react";
import {reducer, inititalState} from "./store/reducer";
import { INCREMENTA, REDUZ } from "./store/action";

const App = () => {
  const [state, dispatch] = useReducer(reducer, inititalState);
  const meuInput = useRef();

  const handleClickIncrementar = () => {
    const valor = Number(meuInput.current.value);
    dispatch({ type: INCREMENTA, payload: { valor } });
  };

  const handleClickReduzir = () => {
    const valor = Number(meuInput.current.value);
    dispatch({ type: REDUZ, payload: { valor } });
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
