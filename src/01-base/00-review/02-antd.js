import { Button, Form, Input, Select, Modal } from "antd";
import React from "react";
function App() {
  return (
    <div>
      <Button
        type="Primary"
        onClick={() => {
          Modal.confirm({
            title: "确认要关闭吗",
            onOk: () => {
              alert("关闭成功");
            },
          });
        }}
      >
        点击我！
      </Button>
      <Button
        type="default"
        onClick={() => {
          Modal.confirm({
            title: "来麻烦了",
            onOk: () => {
              alert("关掉我");
            },
          });
        }}
      >
        小心我
      </Button>
    </div>
  );
}
export default App;
