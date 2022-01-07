import { useReducer } from "react";

// reducer
// -> state를 변경하는 로직이 담겨 있는 함수
const reducer = (state, action) => {
  //state는 이전 state라고 생각하는 것이 좋다.
  // 이전 state와 action의 조합으로 새로운 state를 만든다.

  if (action.type === "PLUS") {
    return {
      count: state.count + 1,
    };
  }
  return state; // newState
};
// dispatch
// -> action 객체를 넣어서 실행
// action -> 객체이고 필수 프로퍼티로 type을 가진다.
export default function Example6() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p> You Clicked {state.count} times</p>
      <button onClick={click}>Click</button>
    </div>
  );
  function click() {
    dispatch({ type: "PLUS" });
  }
}
