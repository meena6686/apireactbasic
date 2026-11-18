import { useState } from "react";

export default function CheckBox() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div>
      <h2>Terms and Conditions</h2>

      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(event) => setAccepted(event.target.checked)}
        />
        I accept the terms and conditions
      </label>

      <p>Status: {accepted ? "Accepted" : "Not Accepted"}</p>

      <button disabled={!accepted}>Continue</button>
    </div>
  );
}