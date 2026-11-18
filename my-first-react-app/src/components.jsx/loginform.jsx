import { useState } from "react";

export default function loginform(){
    const[username,setusername]=usestate("");
    const[password,setpassword]=usestate("");

    function handlesubmit(event){
        event.preventdefault();

        alert("welcome"+username);
    }
    return(
        <div>
            <h2>login form</h2>

            <form onsubmit={handlesubmit}>
            <label>username:</label>
            <input type="text"
            value={username}
            onChange={(Event) => setusername(event.target.value)}
            required />

            <br/><br />
            <button type="submit">login</button>
            </form>
        </div>
    );
}