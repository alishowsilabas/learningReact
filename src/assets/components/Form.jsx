import React, { useState } from "react";

const Form = () => {
  // const [nome, setNome] = useState("");
  // const [sobrenome, setSobrenome] = useState("");
  // const [idade, setIdade] = useState(0);

  const [estado, setEstado] = useState({
    nome: '',
    sobrenome: '',
    idade: 0
  })

  const handleClick = () => {
    console.log(estado.nome, estado.sobrenome, estado.idade);
  };

  const handleChange = (event) => {
    setEstado({
      ...estado,
      [event.target.name]:event.target.value
    })
  }

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} value={estado.nome} name="nome" />
      </div>
      <div>
        <input type="text" onChange={handleChange} value={estado.sobrenome} name="sobrenome" />
      </div>
      <div>
        <input type="text" onChange={handleChange} value={estado.idade} name="idade" />
      </div>

      <button onClick={handleClick}>Clique</button>
    </div>
  );
};

export default Form;
