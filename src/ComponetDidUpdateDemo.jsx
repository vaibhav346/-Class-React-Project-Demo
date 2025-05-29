import React, { Component } from 'react'

export default class ComponetDidUpdateDemo extends Component {

    constructor(){
        super();
        this.state={"counter":0}
    }
    updatecounter=()=>{
        this.setState({"counter":1})
    }
    componentDidUpdate(prevProps,prevState,shanpshot){
        console.log("This method is excuted after component is in update state");
        console.log("before update counter is "+prevState.counter);
        if(this.state.counter<10){
            this.setState({"counter":this.state.counter+1})
        }
    }
  render() {
    return (
      <div>
        ComponetDidUpdateDemo
        <h1>counter is {this.state.counter}</h1>
        <button onClick={this.updatecounter}>update counter</button>
      </div>
    )
  }
}
