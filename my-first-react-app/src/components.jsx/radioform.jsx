import { useState } from "react";

export default function RadioForm() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <h2>Gender Selection</h2>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(event) => setGender(event.target.value)}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(event) => setGender(event.target.value)}
        />
        Female
      </label>

      <p>Selected Gender: {gender || "None"}</p>
    </div>
  );
}