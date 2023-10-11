import React from "react";
import Hero from "./assets/components/Hero";

const app = () => {
  const heros = [
    { nome: "Flash", personagem: "Barry Allen" },
    { nome: "Batman II", personagem: "Bruce Wayne" },
    { nome: "Wonder Woman", personagem: "Princesa Diana" },
  ];

  return (
    <div>
      {" "}
      {heros.map((item) => (
        <Hero key={item.nome} nome={item.nome} personagem={item.personagem} />
      ))}
    </div>
  );
};

export default app;
