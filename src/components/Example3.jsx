import React, { useState } from "react";

export default function Example3() {
  const [state, setState] = useState({ count: 0 });
  const click = () => {
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };
  return (
    <div>
      <p> You Clicked {state.count} times</p>
      <button onClick={click}>Click</button>
    </div>
  );
}
