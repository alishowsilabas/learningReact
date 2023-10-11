import React from "react";

const hero = ({nome, personagem}) => {
  return (
    <div>
      <h1>{nome}</h1>
      <h2>{personagem}</h2>
    </div>
  );
};

export default hero;
