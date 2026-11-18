import { useState } from "react";

function App() {
  const [key, setKey] = useState("");

  return (
    <div>
      <input
        type="text"
        onKeyDown={(event) => setKey(event.key)}
        placeholder="Press any key"
      />

      <p>Key Pressed: {key}</p>
    </div>
  );
}

export default App;