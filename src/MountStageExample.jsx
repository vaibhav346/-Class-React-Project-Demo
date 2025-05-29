import React, { Component } from 'react'

export default class MountStageExample extends Component {

    constructor(){
        super();
        console.log("This is constructor")
        this.state={"counter":0}
    }

    updatecounter=()=>{
        this.setState({"counter":this.state.counter+1})
    }

    componentDidMount(){
        console.log("this is componentDidMount methodexample..........")
    }
  render() {
    console.log("this is render method........")
    return (
      <div>
        <h1>This is Example of mount this.state
        </h1>
        <h2>Counter is {this.state.counter}</h2>
        <button onClick={this.updatecounter}>update counter</button>
      </div>
    )
  }
}
