import React, { useReducer } from "react";

const reducer = (prevState, action) => {
  if (action.type === "incrementa") {
    return {
      contador: prevState.contador + 1,
    };
  }
  if (action.type === "reduzir") {
    return {
      contador: prevState.contador - 1,
    };
  }
  return prevState;
};

const inititalState = {
  contador: 0,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, inititalState);
  const handleClickIncrementar = () => {
    dispatch({ type: "incrementa" });
  };
  const handleClickReduzir = () => {
    dispatch({ type: "reduzir" });
  };

  return (
    <div>
      <p>Contagem: {state.contador}</p>
      <button onClick={handleClickIncrementar}>Incremente</button>
      <button onClick={handleClickReduzir}>Reduzir</button>
    </div>
  );
};

export default App;
