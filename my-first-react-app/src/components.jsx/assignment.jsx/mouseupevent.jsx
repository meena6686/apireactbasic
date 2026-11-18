import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <button
        onMouseDown={() => setMessage("")}
        onMouseUp={() => setMessage("Mouse Button Released!")}
      >
        Press and Release
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;