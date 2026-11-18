import React from 'react'

export default function NestedList() {
    const departments=[
        {id:1,name:"Computer Science",courses:["java","python","react"]},
        {id:2,name:"Electronics",courses:["VLSI","Embedde System","Analog Electronics"]},
        {id:3,name:"Civil",courses:["CAD","Revit","BIM"]},
    ];

  return (
    <div>
        <h2>College Department</h2>

        {departments.map((department)=>(
            <div key={department.id}>
                <h3>{department.name}</h3>

                <ul>
                    {department.courses.map((course)=>(
                        <li key={course}>{course}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}