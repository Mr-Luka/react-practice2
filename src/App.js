import React, {Component} from "react";
import NameTagList from "./NameTagList.js";
import Header from "./Header.js"

class App extends Component {
  state = {
    names: ["Agumon", "Gabumon", "Patamon"],
    name: ""
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
    componentDidUpdate() {
    const savedNameString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNamed", savedNameString);

  }
    componentDidMount(){
    const savedNamesString = localStorage.getItem("savedNames");
    if(savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      this.setState({names: savedNames});
    }
  }
  handleSubmit = e => {
        e.preventDefault();
        this.addName(this.state.name);
        this.setState({name: ""})
    }

  updateName = e => this.setState({name: e.target.value});
  
  render () {
    return (
      <div className="App">
        <Header 
          addName={this.addName} 
          updateName={this.updateName} 
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          />
        <NameTagList 
          names={this.state.names} 
          removeName = {this.removeName}/>
      </div>
    )
  }
}
export default App;