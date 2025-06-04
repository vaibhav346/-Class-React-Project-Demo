import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function GetProducts() {

    let[products,setProduct]=useState=([]);

    useEffect(()=>{
        fechproduct();
    },[])

    let fechproduct=()=>{
        axios.get("http://localhost:8080/")
        .then((response)=>{
setProduct=(response.data);
        })
        .catch((error)=>{
alert("error")
        })
    }
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th></th>
            </tr>
        </thead>
      </table>
    </div>
  )
}
