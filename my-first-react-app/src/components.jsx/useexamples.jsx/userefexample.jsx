import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef(null);
  return (
    <div>
      <h2>Focus Input</h2>
      <input ref={inputRef} placeholder="Enter Your Name" />

      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}