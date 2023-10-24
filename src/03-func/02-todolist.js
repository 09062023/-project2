import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["aa", "bb", "cc"]);
  function handeldel(index) {
    var newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }
  return (
    <div>
      <input
        onChange={(evt) => {
          //console.log("handlechange", evt.target.value);
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
            <button onClick={() => handeldel(index)}>del</button>
          </li>
        ))}
      </ul>
      {!list.length && <span>暂无待办事项</span>}
    </div>
  );
}
