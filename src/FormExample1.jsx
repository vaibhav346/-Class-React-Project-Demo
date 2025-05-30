import React from 'react'
import { useState } from 'react'

export default function FormExample1() {

    let [name,setName]=useState("Meena")


    let handleform=()=>{
        alert("name is "+name)
    }
  return (
    <div>
      <form onSubmit={handleform}>
        <input type="text" value={name} onChange={(event)=>setName(event.target.value)}></input>
    
        <input type="submit" value="register"></input>
      </form>
    </div>
  )
}
