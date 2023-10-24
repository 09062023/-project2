import React, { Component } from 'react'
import axios from 'axios'
export default class Cinema extends Component {
    
    constructor(){
        super()
        this.state={
            cinemaList:[],
            bakcinemalist:[]
        }
        //axios，第三方库，用于请求数据
        //axios.get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3727369').then(res=>{}).catch(err=>{console.log(err)})
        axios({
          url:'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=3727369',
          headers:{
            'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"1695107870423303386759169","bc":"110100"}',
            'X-Host':
            'mall.film-ticket.cinema.list'
          }
        }).then(res=>{console.log(res.data.data.cinemas)
        this.setState({cinemaList:res.data.data.cinemas})
        })
      }
  render() {
    return (
      <div>
            <input onInput={this.handleInput}/>
            {this.state.cinemaList.map(item=><dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
            </dl>)
            }
      </div>
    )
  }
  handleInput=(event)=>{
    console.log("input",event.target.value)
    var newList=this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())||item.address.toUpperCase().includes(event.target.value.toUpperCase()))
    //console.log(newList)
    this.setState({
        cinemaList:newList
    })
    }
}
