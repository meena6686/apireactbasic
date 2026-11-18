import { useState } from "react";

function App() {
  const [color, setColor] = useState("lightgray");

  return (
    <div
      onMouseEnter={() => setColor("blue")}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: color
      }}
    >
    </div>
  );
}

export default App;