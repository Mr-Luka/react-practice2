import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import { names } from "./data.js";

import "./styles.css";
const renderNameTag = name => <NameTag name={name.name} key={name.id}/>
const App = () => {
 
  return (
    <div className="App">
      <h1>Digimon</h1>

    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
