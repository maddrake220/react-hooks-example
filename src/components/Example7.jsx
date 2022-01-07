import { useCallback, useMemo, useState } from "react";

function sum(persons) {
  console.log("sum...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}
export default function Example7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "Mark", age: 35 },
    { name: "Hanna", age: 23 },
  ]);
  //   const count = sum(persons);
  //   // persons가 변한적이 없는데도 계속 계산하는 문제 발생
  //   //
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const click = useCallback(() => {
    console.log(value);
  }, []);
  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>Click</button>
    </div>
  );
  function change(e) {
    setValue(e.target.value);
  }
}
