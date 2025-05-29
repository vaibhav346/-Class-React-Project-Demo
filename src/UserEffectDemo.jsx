import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function UserEffectDemo() {

    let [age,setAge]=useState(0)
    let[data,setData]=useState(100)

    useEffect(()=>{
        console.log("This is example of useEffect() method.now component is in m")
        console.log("updated value of age is "+age)
        if(age<=10){
          setAge(age+1)
        }
    },[age])

  return (
    <div>
        <h1>This is example of UseEffect() hook</h1>
      <h2>age is {age}</h2>
      <h2>data is {data}</h2>
      <button onClick={()=>{setAge(1)}}>update age</button>
      <button onClick={()=>{setData(data-5)}}>Decrease data</button>
    </div>
  )
}
