import React from "react";

export default function GradeIfelseelse() {
  const marks = 8;

  let grade;

  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 75) {
    grade = "B";
  } else if (marks >= 60) {
    grade = "C";
  } else if (marks >= 35) {
    grade = "D";
  } else {
    grade = "Fail";
  }

  return (
    <div>
      <h2>Grade Calculator</h2>
      <p>Marks:{marks}</p>
      <p>Grade:{grade}</p>
    </div>
  );
}