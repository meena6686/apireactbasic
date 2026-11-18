import React from 'react'

export default function LogicalOr() {

    const username="";

  return (
    <div>
        <h2>User Profile</h2>
        <p>Welcome,{username || "Guest"}</p>
    </div>
  )
}