import React, { Component } from 'react'

export default class ShouldComponetUpdateDemo extends Component {

    constructor(){
        super();
        this.state={"counter":0}
    }

    updatecounter=()=>{
        this.setState({"counter":this.state.counter+1})
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("this is example of shouldcomponetUpdate()........")
        console.log("update counter is "+nextState.counter);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("before update counter is "+prevState.counter);
    }
  render() {
    return (
      <div>
        ShouldComponetUpdateDeom
        <h1>counter :{this.state.counter}</h1>
        <button onClick={this.updatecounter}>update counter</button>
      </div>
    )
  }
}
