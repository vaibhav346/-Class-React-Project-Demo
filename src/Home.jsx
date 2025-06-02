import React from 'react'
import { useNavigate } from 'react-router-dom'
// import './Home.css'
const Home = () => {

  let nevigate=useNavigate();
  let show=()=>{
    nevigate("/about");
  }

  return (
    <div>
      <h1>This is Home component</h1>
      <button onClick={show}>visit to about us page</button>
    </div>
  )
}

export default Home
