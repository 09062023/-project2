import React, { Component } from 'react'
import './css/01-index.css'
export default class App extends Component {
  render() {
    return (
      <div>
           {10+20}-
           {1>2?'aaa':'bbb'}
           <div className="active">111111111</div>
      </div>
    )
  }
}
