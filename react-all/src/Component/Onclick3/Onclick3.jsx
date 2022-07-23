import React, { useState } from 'react'

export default function Onclick3() {

    const [count, setCount] = useState(0)

   const HandleClick = () => {
       setCount(count +1)
       if(count === 2){
           alert("not you are selected")
           setCount(0)
       }
   }
  return (
    <div>
        {/* <button onClick={() => HandleClick()}>hellooo</button> */}
        <button onClick={HandleClick}>Hii</button>
    </div>
  )
}