import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("lhy");
  const [age, setAge] = useState(18);
  return (
    <div>
      <button
        onClick={() => {
          setName("xiaoming");
          setAge(22);
        }}
      >
        click
      </button>
      App-{name}-{age}
    </div>
  );
}
