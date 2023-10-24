import React, { Component } from "react";
import { Col, Row } from "antd";
export default class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </div>
    );
  }
}
