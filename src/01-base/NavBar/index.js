import React, { Component } from 'react'
import lhy from 'prop-types'
//console.log(lhy)
export default class NavBar extends Component {
    static propTypes={
        title:lhy.string,
        leftshow:lhy.bool}
    static defaultProps={
        leftshow:true
    }
  render() {
    let {title,leftshow}=this.props
    return (
      <div>
        {leftshow && <button>back</button>}
        navbar-{title}
        <button>home</button>
      </div>
    )
  }
  //类属性
}
/*NavBar.propTypes={
    title:lhy.string,
    leftshow:lhy.bool
}*/

