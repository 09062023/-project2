import React, { Component } from 'react'

export default class App extends Component {
    a=100;
  render() {
    return (
      <div>
        <input/>
        <button onClick={()=>{console.log("click",this.a)}}>add1</button>
        <button onClick={this.handleClick2.bind(this)}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
      </div>
    );
  }
  handleClick2(){
    console.log("handleClick2",this.a)
  }
  handleClick3(){
    console.log("handleClick3")
  }
}
