import React, { useState } from 'react'
// import { useState } from 'react'

export default function FormValidation() {
    let[name,setName]=useState("");
    let[email,setEmail]=useState("");
    let[gender,setGender]=useState("");
    

    //Error state
    let[nameerr,setNameErr]=useState('')
    let[gendererr,setGenderErr]=useState("");
    let[emailerr,setEmailErr]=useState("");

    let validation =()=>{
        let valid=true //value true means all dat is in valid format
        if(name.trimEnd()==''){
            setNameErr("Please enter name");
            valid=false;
        }
        else{
            setNameErr("");
        }
       
        if(gender.trimEnd()==''){
            setGenderErr("Please enter Gender");
            valid=false;
        }
         
        else{
            setGenderErr("");
        }
        if(email.trim()==''){
            setEmailErr("Please enter email");
            valid=false
        }
        // vaibahv@gmail.com
        else if(!/\S+@\S+\.\S+/.test(email)){
            setEmailErr("Please enter email is valid format with @ and.")
            valid=false;
        }
        else {
            setEmailErr("");
        }
        return valid;
    }
   

   let handlevalidation=(event)=>{
    event.preventDefault();
    if(validation()){
        alert("You are register sucessfully")
    }
    }

   
    
  return (
    <div>
        <form onSubmit={handlevalidation}>
            Enter name:<input type='text' onChange={(event)=>{setName(event.target.value)}}></input>
            <span style={{"color":"red","backgroundColor":"yellow"}}>{nameerr}</span>
<br></br>
            Enter Email:<input type='text' onChange={(event)=>{setEmail(event.target.value)}}></input>
            <span style={{"color":"red","background":"yellow"}}>{emailerr}</span>
            <br />
            Select gender:<select onChange={(event)=>{setGender(event.target.value)}}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <span style={{"color":"red","background":"yellow"}}>{gendererr}</span>
            <input type="submit" value="Register"></input>
        </form>

        <h1>{name}...{email}...{gender}</h1>
      
    </div>
  )
}
