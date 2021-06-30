import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class HelloWorld extends React.Component{
  constructor(props){
    super(props);
    this.state = {name: 'Old Button'};
  }
  render(){
    return(
      <div>
        <button onClick={() => this.setState({name: 'New Button'})}> 
          {this.state.name}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('div1')
);