import React, { useState } from "react";

const app = () => {
  const [numero, setNumero] = useState(0);

  const handleClick = () => {
    setNumero(numero + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Incremente</button>
      {numero}
    </div>
  );
};

export default app;
