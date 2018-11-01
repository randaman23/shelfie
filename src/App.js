import React, { Component } from "react";
import axios from 'axios'
import "./App.css";
import Dashboard from "../src/component/Dashboard/Dashboard";
import Form from "../src/component/Form/Form";
import Header from "../src/component/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
  }

  componentDidMount(){
    axios.get('/api/inventory').then((res)=>{
      this.setState({inventory: res.data})
    })
  }

  // delete(id){
  //   axios.delete(`/api/product/${id}`)
  // }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <div>{this.state.inventory}</div> */}
        <Dashboard 
        inventory={this.state.inventory}
        // delete={delete}
        />
        <Form get = {this.componentDidMount}/>
      </div>
    );
  }
}

export default App;
