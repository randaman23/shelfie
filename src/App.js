import React, { Component } from "react";
import "./App.css";
import Dashboard from "../src/component/Dashboard/Dashboard";
import Form from "../src/component/Form/Form";
import Header from "../src/component/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: ["hat", "coat", "shoes","shirt"]
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard 
        inventory={this.state.inventory}/>
        <Form />
      </div>
    );
  }
}

export default App;
