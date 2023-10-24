import React, { Component } from "react";
import BScroll from "better-scroll";

export default class App extends Component {
  state = {
    list: ["111", "222", "333"],
  }; //从本地存储localstorage读取

  componentWillMount() {
    console.log(document.querySelectorAll("li"));
  }

  componentDidMount() {
    console.log(document.querySelectorAll("li"));

    new BScroll("#wrapper");
  }

  render() {
    return (
      <div>
        <div
          id="wrapper"
          style={{ background: "yellow", height: "40px", overflow: "hidden" }}
        >
          <ul>
            {this.state.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
