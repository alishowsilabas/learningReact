import React from "react";
import classes from "./Bar.module.css"; // CSS in JS: tras as classes como propriedades

const Bar = () => {
  return (
    <div className={classes.color}>Bar</div>
  ) 
};

export default Bar;
