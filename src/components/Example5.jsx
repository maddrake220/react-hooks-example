import React, { useState, useEffect } from "react";

export default function Example5() {
  const [state, setState] = useState({ count: 0 });

  useEffect(() => {
    console.log("componentDidMount");

    return () => {
      //cleanup
      // render과 된 직후
      // componentWillUnmount
    };
  }, []);
  useEffect(() => {
    console.log(
      "componentDidMount & componentDidUpdate by state.count",
      state.count
    );
    return () => {
      //cleanup
      console.log("cleanup by state.count", state.count);
    };
  }, [state.count]);
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
