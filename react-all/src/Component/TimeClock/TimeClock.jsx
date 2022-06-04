import React from 'react'
import './TimeClock.css'
import {useState,useEffect} from "react"



const TimeClock = () => {

    var time =[];
   time = new Date().toLocaleTimeString();
   const [ctime,setCtime] = useState(time)
  
     setInterval(()=>{
      var time =[];
      time = new Date().toLocaleTimeString();
       setCtime(ctime)
     },1000)

   
  
  console.log(time)

  return (
    <div>
        <h2>Time Clock .. !!</h2>
    
       <h1>{time}</h1>
    

    </div>
  )
}

export default TimeClock
