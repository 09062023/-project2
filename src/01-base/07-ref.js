import React, { Component } from 'react'

export default class App extends Component {
    myref=React.createRef()
  render() {
    return (
      <div>
        <input ref={this.myref}/>
        <button onClick={()=>{console.log("click",this.myref.current.value)}}>add</button>
      </div>
    )
  }
}
//console.log("click",this.refs.mytext.value)