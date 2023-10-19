import React, { useState } from "react";

const Form = () => {
  // const [nome, setNome] = useState("");
  // const [sobrenome, setSobrenome] = useState("");
  // const [idade, setIdade] = useState(0);

  const [estado, setEstado] = useState({
    nome: "",
    sobrenome: "",
    idade: 0,
    aceito: false,
    sexo: "masculino",
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(
      estado.nome +
        " " +
        estado.sobrenome +
        " " +
        estado.idade +
        " " +
        estado.aceito +
        " " +
        estado.sexo +
        " " +
        estado.cidade
    );
  };

  const handleChange = (event) => {
    setEstado({
      ...estado,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeCB = () => {
    setEstado({
      ...estado,
      aceito: !estado.aceito,
    });
  };

  const handleChangeRadio = (event) => {
    setEstado({
      ...estado,
      sexo: event.target.value,
    });
  };

  const handleChangeSelect = (event) => {
    setEstado({
      ...estado,
      cidade: event.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={estado.nome}
          name="nome"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={estado.sobrenome}
          name="sobrenome"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={estado.idade}
          name="idade"
        />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={handleChangeCB}
          checked={estado.aceito}
        />{" "}
      </div>

      <div>
        <input
          type="radio"
          name="sexo"
          onChange={handleChangeRadio}
          value="masculino"
          checked={estado.sexo === "masculino"}
        />{" "}
        Masculino
        <input
          type="radio"
          name="sexo"
          onChange={handleChangeRadio}
          value="feminino"
          checked={estado.sexo === "feminino"}
        />{" "}
        Feminino
      </div>

      <div>
        <select name="cidade" onChange={handleChangeSelect} id="">
          <option value="São José dos Campos">São José dos Campos</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="São Paulo">São Paulo</option>
        </select>
      </div>

      <button>Clique</button>
      </form>
  );
};

export default Form;
