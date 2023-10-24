import React, { Component } from 'react'

export default class App extends Component {
    state={
        list:[
            {id:1,
             name:"张三"
        },{
            id:2,
            name:'李四'
        },
        {
            id:3,
            name:"王五"
        }
    ]
    }
  render() {
    return (
      <div>
        <ul>
            {this.state.list.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    )
  }
}
