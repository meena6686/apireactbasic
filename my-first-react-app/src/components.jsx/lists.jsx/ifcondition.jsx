import React from 'react'

export default function IfCondition() {
    const isLoggedIn = true;

    if(isLoggedIn){
        return<h2>Welcome to Dashboard</h2>
    };

  return (
    <div>

      <h2>Please Login</h2>
    </div>
  )
}