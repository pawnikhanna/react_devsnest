import React, { Component } from "react";
import './App.css';
import Counter from "./components/Counter"; 

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <p>Counter using setState</p>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}
