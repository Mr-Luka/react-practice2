import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import { names } from "./data.js";

import "./styles.css";
const renderNameTag = name => <NameTag name={name.name} key={name.id}/>
const App = () => {
 const mapNames = names.map(renderNameTag);
  return (
    <div className="App">
      <h1>Digimon</h1>
    {mapNames}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
