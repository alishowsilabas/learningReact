import React, { useState } from "react";

const Form = () => {

  const [meuInputText, setMeuInputText]  = useState('')

  const handleChange = (event) => {
   setMeuInputText(event.target.value)
   console.log(meuInputText);
  }

  const handleClick = () => {
    console.log(meuInputText);
  }

  return  (
    <form action="">
      <input type="text" onChange={handleChange} value={meuInputText}/>
      <button onClick={handleClick}>Clique</button>
    </form>
  )
};

export default Form;
