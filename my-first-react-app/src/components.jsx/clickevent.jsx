import React from "react";

export default function clickevent() {

    function handleclicked(){
        alert("button clicked successfully")
    }
    return(
        <div>
            <h2>clicked event example</h2>
            <button onclick={handleclick}>click me</button>
        </div>
    )
}