import React, {Component} from "react";
import NameTagList from "./NameTagList.js";

class App extends Component {
  state = {
    names: ["Agumon", "Gabumon", "Patamon"]
  }
  removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  render () {
    return (
      <div className="App">
        <h1>Digimon</h1>
        <NameTagList names={this.state.names} removeName = {this.removeName}/>
      </div>
    )
  }
}
export default App;