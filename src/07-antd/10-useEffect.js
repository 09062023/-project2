import React, { useEffect, useState } from "react";

export default function App() {
  const [name, setName] = useState("xiaoming");
  const [age, setAge] = useState("i am 18 years old");
  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1));
    setAge(age.substring(0, 1).toUpperCase() + age.substring(1));
  }, [name, age]);
  return (
    <div>
      {name}-{age}
      <button onClick={() => setName("hesheng")}>click me!</button>
      <button onClick={() => setAge("i am joking you!")}>click me!</button>
    </div>
  );
}
