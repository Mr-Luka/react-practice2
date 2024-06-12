import React, {Component} from "react";
import NameTagList from "./NameTagList.js";
import Header from "./Header.js"

class App extends Component {
  state = {
    names: ["Agumon", "Gabumon", "Patamon"]
  }
  removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };

  addName = name => {
    const newNames =[...this.state.names, name];
    this.setState({names: newNames});
  }
  render () {
    return (
      <div className="App">
        <Header addName={this.addName}/>
        <NameTagList names={this.state.names} removeName = {this.removeName}/>
      </div>
    )
  }
}
export default App;