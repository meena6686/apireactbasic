import { useEffect, useState } from "react";

export default function EmployeeList() {

    const [employees,setemployees]=usestate([]);
    const [loading,setloading]=usestate(true);
    const [error,seterror]=usestate("");
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            if(!response.ok){
                throw new error("failed to fetch employees");
            }
            return response.json();
        })
        .then((data)=>{
            setemployees(data);
            setloading(false);
        })
        .catch((error)=>{
            seterror(error.message);
            setloading(false);
        })
    
    },[]);

    if(loading){
        return <h2>employee details using fetch</h2>;
    }

    if(error){
        return <h1>{error}</h1>
    }

    return(
        <div>
            <h2>employee details</h2>

            {employees.map((employee)=>(
                <div className="employee">
                    <h3>name:{employee.name}</h3>
                     <h3>ID:{employee.ID}</h3>
                      <h3>email:{employee.email}</h3>
                       <h3>username:{employee.username}</h3>
                        <h3>city:{employee.address.city}</h3>
                         <h3>ZipCode:{employee.zipcode}</h3>

                </div>
            ))}
        </div>
    )
}