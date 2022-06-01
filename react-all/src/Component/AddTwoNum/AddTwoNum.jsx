import React, { useState } from 'react'

export default function AddTwoNum() {
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const[total , setTotal] = useState(0)

    const handleAdd =() => {
        setTotal(first + second)
    }

  return (
    <div>
      <input type="number" onChange={(e) => setFirst(+e.target.value)}/>
      <input type="number" onChange={(e) => setSecond(+e.target.value)}/><br /><br />
      <button onClick={() => handleAdd()} >Add</button>
      
      <h1> Total : {total}</h1>
    </div>
  )
}