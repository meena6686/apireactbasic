import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <img
        src="https://placehold.co/200x150"
        alt="Sample"
        onMouseLeave={() => setMessage("Mouse moved out of the image!")}
        style={{ width: "200px" }}
      />

      <p>{message}</p>
    </div>
  );
}

export default App;