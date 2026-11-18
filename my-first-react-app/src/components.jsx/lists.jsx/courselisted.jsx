import React from 'react'

export default function Courseslist() {
    const courses = ["React", "Node", "MongoDB", "Express", "JavaScript", "HTML", "CSS", "Bootst"]
  return (
    <div>
        <h2>Courses List</h2>
        <ol>
            {courses.map((course, index) => (
                <p key={index}>{course}</p>
            ))}
        </ol>
    </div>
  )
}