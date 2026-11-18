import {useNavigate} from "react-router-dom";

export default function login() {
    const navigate=usenavigate();

    function handlelogin() {
        navigate("/dashboard")
    }
    return (
        <div>
            <h2>login page</h2>

            <button onclick={handlelogin}>login</button>
        </div>
    )
}