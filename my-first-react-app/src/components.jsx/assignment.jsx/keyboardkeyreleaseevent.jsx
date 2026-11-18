import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        type="text"
        onKeyUp={() => setMessage("Key Released!")}
        placeholder="Type something"
      />

      <p>{message}</p>
    </div>
  );
}

export default App;