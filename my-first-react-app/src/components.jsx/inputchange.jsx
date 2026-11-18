import {usestate} from "react";

export default function inputchange(){
    const[message,setmessage]=usestate("click the input field");

    return(
        <div>
            <h2>focus and events</h2>

            <input type="text"
            placeholder="enter your name"
            onfocus ={()=>setmessage("input focused")}
            onblur={()=>setmessage("Input lost focus")}/>

            <p>{message}</p>
        </div>
    )
}