import React, { useEffect, useReducer } from "react";

const fetchInitialState = {
  data: null,
  isLoading: false,
  error: null,
};

const fetchReducer = (state, action) => {
  if (action.type === "START") {
    console.log("START");
    return {
      data: null,
      isLoading: true,
      erro: null,
    };
  }

  if (action.type === "SUCCESS") {
    console.log("SUCCESS");
    return {
      data: action.payload,
      isLoading: false,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    console.log("ERROR");
    return {
      data: null,
      isLoading: false,
      error: action.payload,
    };
  }

  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(fetchReducer, fetchInitialState);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    dispatch({ type: "START" });
    try {
      const retorno = await fetch("https://jsonplaceholder.typicode.com/usersaaa");
      if (!retorno.ok) {
        throw new Error("Houve um erro inesperado");
      }
      const dados = await retorno.json();
      dispatch({ type: "SUCCESS", payload: dados });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  }

  return (
    <div>
      {state.isLoading && <p>Is Loading...</p>}
      {state.error && <p>Houve um erro inesperado...</p>}
      {state.data && <p>{state.data.length}</p>}
    </div>
  );
};

export default App;
