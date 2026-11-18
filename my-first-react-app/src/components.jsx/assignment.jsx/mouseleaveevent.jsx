import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div
      onMouseLeave={() => setMessage("Mouse Left the Box!")}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "lightgreen",
        border: "1px solid black"
      }}
    >
      {message}
    </div>
  );
}

export default App;