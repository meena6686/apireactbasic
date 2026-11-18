import React from "react";

export default function ActiveEmployee() {
  const employees = [
    { id: 1, name: "Rahul", active: true },
    { id: 2, name: "priya", active: false },
    { id: 3, name: "sanath", active: true },
    { id: 4, name: "priyanka", active: false },
    { id: 5, name: "priyamani", active: false },
  ];

  const activeEmployees = employees.filter(
    (employee) => employee.active
  )

  return <div>
    <h2>Active Employee List</h2>
    {activeEmployees.map((employee)=>(
        <p key={employee.id}>{employee.name}</p>
    ))}
  </div>;
}