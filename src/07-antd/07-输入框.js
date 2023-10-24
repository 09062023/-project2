import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["000", "aaa", "bbb"]);
  function handleDel(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  return (
    <div>
      <Input
        placeholder="default size"
        prefix={<UserOutlined />}
        onChange={(evt) => {
          console.log("successful", evt.target.value);
          setText(evt.target.value);
        }}
        value={text}
      />
      <Tooltip title="search">
        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
          onClick={() => {
            console.log(text);
            setList([...list, text]);
            setText("");
          }}
        />
      </Tooltip>
      <ul>
        {list.map((item, index) => (
          <li key={item}>
            {item}
            <button onClick={() => handleDel(index)}>del</button>
          </li>
        ))}
      </ul>
      {!list.length && <div>暂无待办事项</div>}
    </div>
  );
}
