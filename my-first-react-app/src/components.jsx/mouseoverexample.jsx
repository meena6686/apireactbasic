import {usestate} from "react";

export default function mouseoverexample(){
    const[message,setmessaged]=usestate("move your mouse over me");
    return(
        <div>
            <h2>mouse over example</h2>
            <div>
                 onmouseover={() =>setmessaged("mouse over the element...")}
                 onmouseout={() =>setmessaged("mouse moved of the element...")}
            </div>
        </div>
        
    )
}