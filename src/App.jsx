import React from "react";

const app = () => {

    const handleClick = () => {
      console.log("Botão Clicado")
    }

  return (
    <div>
      <button onClick={handleClick}>Clique</button>
    </div>
  );
};

export default app;
