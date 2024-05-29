import React from "react";
import App from "./App.js"

const NameTag = (props) =>{
  const deleteByIndex = () => props.removeName(props.index);
 return  (
  <div className="name-tag">
    <h3 className="title">HI!</h3>
    <p className="subtitle">my name is</p>
    <h2 className="name">{props.name}</h2>
   <span onClick={deleteByIndex} className="name-tag__delete">
        x
      </span>
  </div>
);
}

export default NameTag;