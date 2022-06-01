import React, { useState } from 'react'

export default function DisableButton() {
    const[text1 , setText1] = useState("")
  return (
    <div>
            <input type="text" value={text1} placeholder='add tyepe' onChange={(e) => setText1(e.target.value)} />

            {/* {
                text1.length > 0 ? <><button>yes</button></> : <></>
            } */}

            <button disabled={text1.length < 1} >Submit</button>
    </div>
  )
}