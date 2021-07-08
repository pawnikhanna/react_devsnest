import React, { Component } from "react";

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    render(){
        return(
            <div className="counter" onClick={() => {this.setState({count: this.state.count+1})}}>
                <button>{this.state.count} </button>
            </div>
        )
    }
}