import React, { Component } from 'react'

export default class UnmountDemo extends Component {

    componentWillUnmount(){
        console.log("this is componentWillUnmount() method example..........")
    }
  render() {
    return (
      <div>
        <h1>Hello from React Js</h1>
      </div>
    )
  }
}
