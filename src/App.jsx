import React from "react";
import Contador from "./assets/components/Contador"

const app = () => {
  return (
    <div>
      <Contador valorInicial={0}/>
      <Contador valorInicial={10}/>
      <Contador valorInicial={15}/>
    </div>
  );
};

export default app;
