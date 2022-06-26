import React from 'react'
import { useRef, useState } from 'react';


const Timer = () => {

    const [time,setTime] = useState(0)
  const [hr,setHr] = useState(0)
  const count = useRef(0)
  const hrCount = useRef(0)
  const [aa,setaa] = useState(null)
var cc = 0

  function start(){
    
    setaa(setInterval(()=>{
      if(count.current === 90){
        cc++
        setTime(0)
        count.current = 0
      }
      count.current +=1
      setTime(count.current)
      console.log('pp');
    },100))
  }

  function stop(){
    clearInterval(aa)
    setTime(0)
    count.current = 0
  }

  return (
    <div>
      <h2>Timer .. !!</h2>
         
      <h3>{cc}:{time}</h3>
      <button onClick={start}>Start</button>
      <button>Pause</button>
      <button onClick={stop}>Stop</button>

    </div>
  )
}

export default Timer
