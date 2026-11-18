import {usestate} from "react";

export default function mouseevent(){
    const[message,setmessaged]=usestate("move the mouse");
    return(
        <div>
            <h2>mouse event example</h2>
            <div>
                 onmouseenter={() =>setmessaged("mouse entered...")}
                 onmouseleave={() =>setmessaged("mouse left...")}
                  style={{
        width: "200px",
        height: "100px",
        backgroundColor: color
      }}
     </div>
        </div>
        
    )
}