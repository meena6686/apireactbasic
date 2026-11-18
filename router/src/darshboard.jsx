import {link,outlet} from "react-router-dom";

export default function dashboardhome() {
   return (
    <div>
        <h1>Dasboard</h1>
        <nav>
            <link to="/dashboard">home</link>
            <link to="/dashboard/profile">profile</link>
            <link to="/dashboard/settings">settings</link>
        </nav>
        <hr />
        <outlet/>

    </div>
   )
}
    
