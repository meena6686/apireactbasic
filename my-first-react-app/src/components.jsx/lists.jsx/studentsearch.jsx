import React from 'react'

export default function StudentSearch() {

  const students=[
    {id:1,name:"Rahul"},
    {id:2,name:"Priya"},
    {id:3,name:"Kiran"},
    {id:4,name:"AkAsh"},
    {id:5,name:"Raghu"},
  ]

  const SearchLetter="a";
  const filteredStudents=
  students.filter((student)=>(
    student.name.toLocaleLowerCase().includes(SearchLetter.toLocaleLowerCase())
  ))
  ;

  return (
    <div>
      <h2>Student Search</h2>
      <p>Search Letter:{SearchLetter}</p>

      {filteredStudents.length>0 ?(
        filteredStudents.map((student)=>(
          <p key={student.id}>{student.name}</p>
        ))
      ):(
        <p>No Students Found</p>
      )}
    </div>
  )
}