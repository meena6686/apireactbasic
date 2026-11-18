import { useState } from "react";

function App() {
  const [color, setColor] = useState("lightgray");

  return (
    <button
      onMouseDown={() => setColor("orange")}
      onMouseUp={() => setColor("lightgray")}
      style={{ backgroundColor: color }}
    >
      Press and Hold
    </button>
  );
}

export default App;