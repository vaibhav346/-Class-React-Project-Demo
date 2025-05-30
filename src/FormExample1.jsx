import React from 'react'
import { useState } from 'react'
import { HiH1 } from 'react-icons/hi2'

export default function FormExample1() {

    let [name,setName]=useState("Meena")
    let[city,setCity]=useState("")
    let[gender,setGender]=useState("")
    let[subject,setSubject]=useState([])

    let handleform=()=>{
        alert("name is "+name+"\n You select the city as "+city)
        alert("Gender is "+gender)
    }

    let handlegender=(event)=>{
        setGender(event.target.value);
    }

    let handlesubject=(event)=>{
      let value=event.target.value;
      let checked=event.target.checked;
      if(checked){
        setSubject([...subject,value])
      }

      else{
        setSubject(subject.filter((sub)=>sub!=value));
      }

    }
  return (
    <div>
      <form onSubmit={handleform}>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}></input>
    <br></br>
     Select city:
        <select onChange={(event)=>{setCity(event.target.value)}}>
        <option value="pune">Pune</option>
        <option value="satara">Satara</option>
        <option value="sangali">Sangali</option>
        <option value="beed">Beed</option>
        </select>

<br ></br>
Select Gender
<br ></br>
        Male
        <input type="radio" value="Male" name='gender' onChange={handlegender}></input>
        Female 
        <input type="radio" value="Female" name='gender' onChange={handlegender}></input>
        Other 
        <input type="radio" value="Other" name='gender' onChange={handlegender}></input>

<br ></br>
Select Coursees: 
<input type="checkbox" value="java" onChange={handlesubject}></input>Java 
<input type="checkbox" value="Python" onChange={handlesubject}></input>Python 
<input type="checkbox" value="machine learning" onChange={handlesubject}></input>Machine learing 
<br></br>
        <input type="submit" value="register"></input>

       
   
      </form>
   {
    subject.map((ele)=>
  <h1>{ele}</h1>)
   }
   
   
    </div>

   
   
  )
}
