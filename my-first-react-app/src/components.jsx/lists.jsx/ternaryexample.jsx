import React from 'react'

export default function TernaryExample() {
    const age=2;
  return (
    <div>
        <h2>Age Verification</h2>

        <p>
            {age>=18
            ?"You are eligible to register"
            :"You are not eligible to register"}
        </p>
    </div>
  )
}