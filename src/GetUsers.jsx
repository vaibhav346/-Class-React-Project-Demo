import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
export default function GetUsers() {

    let[users,setUsers]=useState([])
    // const navigate=useNavigate();

    useEffect(()=>{
        fechusersdata();
    },[])

    let fechusersdata=()=>{
        axios.get("http://localhost:8080/findall")
        .then((response)=>{
            setUsers(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

let deletestud = (sid) => {
  axios.delete(`http://localhost:8080/deletebyid/${sid}`)
    .then((response) => {
      if (response.data != null) {
        alert("Record deleted successfully");
        fechusersdata();  // Re-fetch users after deletion
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

let updatestud=(sid)=>{
  axios.put(`http://localhost:8080/updatebyid/${sid}`)
  .then((response)=>{
    if(response.data!=null){
      alert("Go to update data page");
      fechusersdata();

    }
  })
}
  return (

    <div>
        
      <table  striped="columns"   className='table table-bordered border-dark '>
        <thead>
<tr>
    <th>sid</th>
    <th>name</th>
    <th>email</th>
    <th>course</th>
    <th>marks</th>
    <th>address</th>
    <th>contactno</th>
    <th colSpan="2">Action</th>
</tr>
        </thead>
        <tbody>
{
    users.map((user)=>
        <tr>
    <td>{user.sid}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.course}</td>
    <td>{user.marks}</td>
    <td>{user.address}</td>
    <td>{user.contactno}</td>
    <td className='con'><button className='update' onClick={()=>{updatestud(user.sid)}} >update</button>
      <button  className='delete' onClick={()=>{deletestud(user.sid)}}>delete</button></td>
    </tr>
    
)
}
        </tbody>
      </table>

      <form action="">
        <h1>Updation Form</h1><br />
        Enter Name: <input type="text" /><br />
        Enter Email: <input type="text" /><br />
        Select Course: <select >
          <option >Select Course</option>
          <option value="Java">Java</option>
          <option value="Spring Boot">Spring boot</option>
          <option value="React Js">React Js</option>
        </select><br />
        Enter Marks: <input type="text" />
        <br />
        Enter Address: <input type="text" />
        <br />
        Enter Contactno: <input type="text" />
        <br />
        <input type="submit" value="Update Student data" className='update' />
      </form>
    </div>
  )
}
