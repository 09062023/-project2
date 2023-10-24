import React, { Component } from 'react'
import './css/02-maizuo.css'
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'
export default class App extends Component {
    state={
        list:[
            {
                id:1,
                text:"电影"
            },
            {
                id:2,
                text:"影院"
            },
            {
                id:3,
                text:"我的"
            }
        ],current:0
    }
  render() {
    const {current,list}=this.state

    return (
      <div>
        {current===0 && <Film></Film>}
        {current===1 && <Cinema></Cinema>}
        {current===2 && <Center></Center>}
        <ul>
            {
                list.map((item,index)=><li key={item.id} className={current===index?'active':''} onClick={()=>this.handleClick(index)}>{item.text}</li>)
            }
        </ul>
      </div>
        )
    }
    handleClick(index){
        console.log(index)
        this.setState({
            current:index
        })
  }
}
