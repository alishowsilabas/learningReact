import React, { useState } from "react";

const app = () => {
  const [numero, setNumero] = useState(0);

  const handleClick = () => {
    setNumero((estado => estado + 1));
  };

  return (
    <div>
      <button onClick={handleClick}>Incremente</button>
      {numero}
    </div>
  );
};

export default app;
