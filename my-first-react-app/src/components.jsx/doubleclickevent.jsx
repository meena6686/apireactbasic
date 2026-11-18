import React from "react"

export default function doubleclick(){
    function handledoubleclick(){
        alert("button double clicked successfully")
    }
    return(
        <div>
            <h2>double clicked successfully</h2>
            <button onDoubleClick={handledoubleclick}>double click me</button>
        </div>
    )
}