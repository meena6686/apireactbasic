import {useParams} from "react-router-dom";

export default function employee() {
    const{id}=useParams();

    const employees={
        101:"krishna",
        101:"ravi",
        101:"priya"
    }
    return(
        <div>
            <h1>employee details</h1>

            <h2>employee ID: {id}</h2>

            <h2>Employee Name:{employees[id] ||"employee not found"}</h2>
        </div>
    )
}