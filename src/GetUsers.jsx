import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
export default function GetUsers() {

    let[users,setUsers]=useState([])

    useEffect(()=>{
        fechusersdata();
    })

    let fechusersdata=()=>{
        axios.get("http://localhost:8080/findall")
        .then((response)=>{
            setUsers(response.data)
        })
        .catch((error)=>{
            console.log(error)
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
    </tr>
    
)
}
        </tbody>
      </table>
    </div>
  )
}
