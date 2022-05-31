import React, { useState } from 'react'

export default function Validation() {
    const[num, setNum] = useState("")
    const handelChange= (e) => {
        if(e.target.value[num.length] >= 0){
            //setNum(e.target.value)
        } else{
          setNum(e.target.value)
        }
    }

    const handleADD = () => {
        console.log("leen" , num.length)
        if(num.length > 20){
          alert("succ")
        }
        else{
          alert("increse len")
        }
    }
  return (
    <div>
        <input type = "text" placeholder='Number Enter' value={num} onChange={(e) => handelChange(e)} />
        <h1>{num}</h1>
        <h1>{num.length}</h1>
        <button onClick={() => handleADD()}>ADD</button>
    </div>
  )
}
