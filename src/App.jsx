import { useEffect, useState } from 'react'
import './App.css'

function App() {

  let[count,setcount]=useState(0)

  let[data,setData]=useState([])
  
   async function getdata(){
    let response=await fetch("http://localhost:3000/users")

    response=await response.json()

    // console.log(response)

    setData(response)

    // console.log(data)
 
  }

   useEffect(()=>{
       getData()
    },[])

    
  // function greet(){
  //  console.log("hello")

  // }
  // useEffect(()=>{
  // greet()
  // },[])
  
  return (
    <>
      
      <h1>Hello from app</h1>

      <h2>add new user</h2>
      <button>ADD</button>

      <ul className='userhead'>
        <li><h1>user id</h1></li>
        <li><h1>user name</h1></li>
        <li><h1>user age</h1></li>
        <li><h1>action</h1></li>
      </ul>

      {
        data.map((user)=>(
          <ul className='userlist'>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li><button>delete</button></li>
            <li><button>edit</button></li>
          </ul>
        ))
      }
      
    </>
  )
}

export default App
