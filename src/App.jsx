import React from "react";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const retorno = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await retorno.json();
    console.log(dados);
  }

  return <div>App</div>;
};

export default App;
