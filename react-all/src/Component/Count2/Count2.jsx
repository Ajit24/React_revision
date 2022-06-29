import React,{ useEffect, useState } from 'react'

const Count2 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

 

  return (
    <div>
      
      <h1>{count1}</h1>
      <button onClick={handleClick1}>click1</button>
      <h1>{count2}</h1>
      <button onClick={handleClick2}>Click2</button>


    </div>
  )
}

export default Count2
