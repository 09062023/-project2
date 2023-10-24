import React, { Component } from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/*类组件 */}
        <NavBar title="导航栏"/>
        {/*函数式组件 */}
        <SideBar bg="yellow" position="left"/>
      </div>
    )
  }
}
