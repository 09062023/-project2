import React,{Component} from "react"

class Child extends Component{
    render(){
        return <div>Child
        </div>
    }
}

class Header extends Component{
    render(){
        return <div>头
            <Child></Child>
        </div>
    }
}
function Content(){
    return <div>content</div>
}
let Footer=()=><div>footer</div>

export default class App extends Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}