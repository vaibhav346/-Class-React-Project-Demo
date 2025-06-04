import React, { useState } from 'react'
import axios from 'axios';

export default function PostData() {

    let[name,setName]=useState('');
    let[email,setEmail]=useState('');
    let[course,setCourse]=useState('');
    let[address,setAddress]=useState('');
    let[marks,setMarks]=useState('');
    let[contactno,setContactno]=useState('');

    let addstudent=(event)=>{
        event.preventDefault();
        let studdata={name,email,course,marks,address,contactno}
        axios.post("http://localhost:8080/save",studdata)
        .then((response)=>{
            if(response.data!=null){
                alert("student data added sucessfully")
            }
        })
        .catch((error)=>{alert(error)})

    }
  return (
 
    <div>
        <form onSubmit={addstudent}>
     Enter Name: <input type='text' onChange={(event)=>{setName(event.target.value)}}></input><br />
     Enter Email: <input type="email"  onChange={(event)=>{setEmail(event.target.value)}}/> <br />
     Select Course: <select onChange={(event)=>{setCourse(event.target.value)}} >
        <option >Select course</option>
        <option value="java">Java</option>
        <option value="Spring boot">Spring</option>
        <option value="react js">React js</option>
     </select>
     <br />
     Enter marks: <input type="text" onChange={(event)=>{setMarks(event.target.value)}}/> <br />
     Enter address: <input type="text" onChange={(event)=>{setAddress(event.target.value)}}/> <br />

     Enter contactno: <input type="text" onChange={(event)=>{setContactno(event.target.value)}}/> <br />
     <input className='update' type="submit" value='Register' />
     </form>
    </div>
  )
}
