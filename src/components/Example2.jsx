import React, { useState } from "react";

export default function Example2() {
  const [count, setCount] = useState(0);
  const click = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p> You Clicked {count} times</p>
      <button onClick={click}>Click</button>
    </div>
  );
}
