import React, { Component } from 'react'

export default class App extends Component {
    a=1
    state={
        myText:"收藏",
        myShow:true,
    }
  render() {
    return (
      <div>
        <h1>欢迎来到此文章</h1>
        <button onClick={()=>{
            this.setState({
                myShow:!this.state.myShow
            })
        }}>{this.state.myShow?"收藏":"取消收藏"}</button>
      </div>
    )
  }
}
