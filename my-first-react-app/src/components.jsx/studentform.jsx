import {usestate} from "react";

export default function studentform() {
    const[student,setstudent]=usestate({
        name:"",email:"",age:"",course:"",
    });

    const[submitted,setsubmitted]=usestate(false);

    function handlechange(event){
        const{name,value}=event.target;
        setstudent({
            ...student,
            [name]:value,
        });

        setsubmitted(false);
    }

    function handlesubmit(event){
        event.preventDefault();
        setsubmiited(true);
    }

    return(
        <div>
            <h2> student registration</h2>

            <form onSubmit={handlesubmit}>
                <input 
                name="name"
                placeholder="enter student name"
                type="text"
                value={student.name}
                onchange={handlechange}
                required />

                <br /><br />

                <input 
                name="email"
                placeholder="student email"
                type="email"
                value={student.email}
                onchange={handlechange}
                required />

                <br /><br />

                 <input 
                name="age"
                placeholder="student name"
                type="number"
                value={student.age}
                onchange={handlechange}
                min="1"
                required />

                <br /><br />

           <select
            name="course"
            value={student.course}
            onChange={handleChange}
            required
            >

           <option value="">Selected Course</option>
           <option value="Java">Java</option>
           <option value="Python">Python</option>
           <option value="React JS">React JS</option>
           </select>

           <br/><br/>
           <button type="submit">Register</button>
        </form>
            <div>
                <h3>registration details</h3>
                <p>name:{student.name}</p>
                <p>email:{student.email}</p>
                <p>age:{student.age}</p>
                <p>course:{student.course}</p>
            </div>
        </div>
    )
}