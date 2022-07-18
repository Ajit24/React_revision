import React,{ useEffect, useState } from 'react'

const Count2 = () => {
    // const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

//  useEffect(()=>{
//     document.title = `${count1}`;
//  })

//  const handleClick1 = ()=>{
//     setCount1(count1+1);
//  }

 const handleClick2 = ()=>{
setCount2(count2+2);
 }
  return (
    <div>
      
      {/* <h1>{count1}</h1>
      <button onClick={handleClick1}>click-1</button> */}
      <h1>{count2}</h1>
      <button onClick={handleClick2}>Click-2</button>


    </div>
  )
}

export default Count2
