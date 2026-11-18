import { useState } from "react";

function App() {
  const [text, setText] = useState("Double Click Me");

  return (
    <h1 onDoubleClick={() => setText("You Double Clicked Me!")}>
      {text}
    </h1>
  );
}

export default App;