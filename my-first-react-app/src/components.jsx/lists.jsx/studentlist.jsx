import React from 'react'

export default function StudentList() {
  const students = ["Rahul", "Ramesh", "Suresh", "Mahesh", "Ganesh", "Rakesh", "Rajesh", "Rohit", "Ravi"]

  return (
    <div>
      <h2>Student List</h2>
      <ol>
        {students.map((student, index) => (
          <p key={index}>{student}</p>
        ))}
      </ol>
    </div>
  )
}