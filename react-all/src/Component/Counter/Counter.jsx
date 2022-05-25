import React from 'react'
import { useState } from 'react'
export default function Counter() {

    const [count, setCount] = useState(0)
    // console.log(count);


  return (
    <div>
      <h1>Counter app </h1> <hr /> <hr />

      <h2> Counter :- {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add+</button>

       {
          count > 0 ? <button onClick={() => setCount(count - 1)}>Add-</button> : <></>
      } 

     {/* <button onClick={() => setCount(count - 1)}>subt-</button>  */}
    </div>
  )
}

