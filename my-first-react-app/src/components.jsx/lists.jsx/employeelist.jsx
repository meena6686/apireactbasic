import React from 'react'

export default function Employee() {
  const Employees = [
    {
        id: 1,
        name: "Rahul",
        department: "IT",
        salary: 50000
    },
    {
        id: 2,
        name: "Ramesh",
        department: "HR",
        salary: 60000
    },
    {
        id: 3,
        name: "Suresh",
        department: "Finance",
        salary: 70000
    }
  ];

return (
  <div>
    <h2>Employee Details</h2>

    {Employees.map((employee) => (
      <div key={employee.id}>
        <h5>ID: {employee.id}</h5>
        <h4>Name: {employee.name}</h4>
        <p>Department: {employee.department}</p>
        <p>Salary: {employee.salary}</p>
      </div>
    ))}
  </div>
  )
}