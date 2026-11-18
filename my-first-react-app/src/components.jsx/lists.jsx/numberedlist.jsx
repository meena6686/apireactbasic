import React from 'react'

export default function Numberlist() {
    const numbers = [10,20,30,40,50,60,70,80,90,100];
  return (
    <div>
        <h2>number list</h2>
        <ol>
            {numbers.map((number, index) => (
                <p key={index}>{number}</p>
            ))}
        </ol>
    </div>
  )
}