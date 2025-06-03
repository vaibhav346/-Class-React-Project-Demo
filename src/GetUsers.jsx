import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
export default function GetUsers() {

    let[users,setUsers]=useState([])

    useEffect(()=>{
        fechusersdata();
    })

    let fechusersdata=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
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
    <th>id</th>
    <th>name</th>
    <th>email</th>
    <th>username</th>
</tr>
        </thead>
        <tbody>
{
    users.map((user)=>
        <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.username}</td>
    </tr>
    
)
}
        </tbody>
      </table>
    </div>
  )
}
