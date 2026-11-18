import { useState } from "react";

export default function keyboardevents(){
    const[key,setkey]=usestate("");
    return(
       <div>
        <h2>keyboard event example</h2>
        <input type="text" placeholder="press any key"
        onKeyDown={(event)=>setkey(event.key)} />

        <p>key pressed:{key}</p>
       </div>
    )

}