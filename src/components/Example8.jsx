import { createRef, useRef, useState } from "react";
export default function Example8() {
  const [value, setValue] = useState("");
  const input1Ref = createRef();
  const input2Ref = useRef();

  console.log("input1Ref", input1Ref.current);
  console.log("input2Ref", input2Ref.current);

  return (
    <div>
      {/* Controlled Component */}
      <input value={value} onChange={change} />
      {/* Uncontrolled Component */}
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );
  function change(e) {
    setValue(e.target.value);
  }
}
