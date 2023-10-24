import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["aaa", "bbb", "ccc"]);
  function handleDel(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  return (
    <div>
      <input
        onChange={(evt) => {
          //console.log("changed", evt.target.value);
          setText(evt.target.value);
        }}
        value={text}
      />
      <button
        onClick={() => {
          console.log(text);
          setList([...list, text]);
          setText("");
        }}
      >
        add
      </button>
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
