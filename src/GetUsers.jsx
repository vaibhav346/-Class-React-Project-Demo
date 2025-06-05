import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
// import { Navigate, useNavigate } from 'react-router-dom'
export default function GetUsers() {

    let[users,setUsers]=useState([])
    // const navigate=useNavigate();
    let[isupdate,setIsudate]=useState(false)
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[course,setCourse]=useState("")
    let[marks,setMarks]=useState("")
    let[address,setAddress]=useState("")
    let[contactno,setContactno]=useState("")
    let[sid,setSid]=useState(0)
    

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

let updatestud=(event)=>{
   event.preventDefault(); 
  let newstud={name,email,contactno,address,marks,course}
  axios.put(`http://localhost:8080/updatebyid/${sid}`,newstud)
  .then((response)=>{
    if(response.data){
      alert("Record Updated Sucessfully");


    }
  })
}

let update=(user)=>{
  setIsudate(!isupdate)
console.log(user)

  
  setName(user.name);
  setEmail(user.email);
  setCourse(user.course);
  setAddress(user.address);
  setMarks(user.marks);
  setContactno(user.contactno);
  setSid(user.sid);




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
    <td className='con'><button className='update' onClick={()=>{update(user)}} >Update</button>
      <button  className='delete' onClick={()=>{deletestud(user.sid)}}>Delete</button></td>
    </tr>
    
)
}
        </tbody>
      </table>
{
   isupdate? <form onSubmit={updatestud}>
        <h1>Updation Form</h1><br />
        Enter Name: <input type="text" value={name}  onChange={(event)=>{setName(event.target.value)}}/><br />
        Enter Email: <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}} /><br />
        Select Course: <select value={course} onChange={(event)=>{setCourse(event.target.value)}} >
          <option >Select Course</option>
          <option value="Java">Java</option>
          <option value="Spring Boot">Spring boot</option>
          <option value="React Js">React Js</option>
        </select><br />
        Enter Marks: <input type="text" value={marks} onChange={(event)=>{setMarks(event.target.value)}}/>
        <br />
        Enter Address: <input type="text" value={address}onChange={(event)=>{setAddress(event.target.value)}} />
        <br />
        Enter Contactno: <input type="text"value={contactno} onChange={(event)=>{setContactno(event.target.value)}}/>
        <br />
        <input type="submit" value="Update" className='update'/>
      </form>:null
      }
    </div>
  )
}
