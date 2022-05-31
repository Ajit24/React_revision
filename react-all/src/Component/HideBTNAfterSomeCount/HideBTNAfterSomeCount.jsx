import React, {useState} from 'react'

const HideBTNAfterSomeCount = () => {

    const [count, setCount] = useState(0)


  return (
    <div>
      <h2>Hide BTN After Some Counts .... !!</h2>

      <h1>{count}</h1>

 {
count >= 10 ? <></> : <><button onClick={() => setCount(count + 1)} >Add</button></>
} 


{/* // --------------count to 10 ------------ */}
{/* <button disabled={count >= 10} onClick={() => setCount(count + 1)} >Add</button> */}


    </div>
  )
}

export default HideBTNAfterSomeCount
