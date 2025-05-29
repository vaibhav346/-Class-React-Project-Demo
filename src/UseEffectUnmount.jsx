import React from 'react'
import { useEffect } from 'react'
export default function UseEffectUnmount() {

    useEffect(()=>{
        console.log("Componenet is in mount stage")
        return ()=>{
            console.log("component is in unmount stage")
        }
    })
  return (
    <div>
      <h1>This is Example of unmount stage</h1>
    </div>
  )
}
