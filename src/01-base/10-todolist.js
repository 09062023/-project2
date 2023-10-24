import React, { Component } from 'react'

export default class App extends Component {
    a=100
    myref=React.createRef()
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
       }]
    }
  render() {
    return (
      <div>
        <input ref={this.myref}/>
        <button onClick={this.handleClick2}>add</button>
        <ul>
            {this.state.list.map((item,index)=><li key={item.id}>
                {/*item.name*/}
                <span dangerouslySetInnerHTML={{__html:item.name}}></span>
                <button onClick={this.handleDelClick.bind(this,index)}>del</button></li>)}
        </ul>
        {this.state.list.length===0?<div>暂无待办事项</div>:null}
      </div>
    )
  }
  handleClick2 = ()=>{
    console.log("click",this.myref.current.value)
    let newList=[...this.state.list]
    newList.push({
        id:Math.random()*100,
        name:this.myref.current.value
    })
    this.setState({
        list:newList
    })
    /*清空输入框 */
    this.myref.current.value=''
  }
  handleDelClick=(index)=>{
    console.log("del-click",index)
    let newList=this.state.list.concat()

    newList.splice(index,1)
    this.setState({
        list:newList
    })
  }
}
//console.log("click",this.refs.mytext.value)