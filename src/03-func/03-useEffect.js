import React, { useState, useEffect } from "react";

export default function App() {
  const [name, setName] = useState("lhy");
  useEffect(() => {
    setName(name.substring(0, 1).toUpperCase() + name.substring(1));
  }, [name]);
  return (
    <div>
      app-{name}
      <button
        onClick={() => {
          setName("sha");
        }}
      >
        click
      </button>
    </div>
  );
}
