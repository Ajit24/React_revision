import React, { useEffect, useState } from 'react'
import "./Remote.css"

export default function Remote() {

    const [ct, setCt] = useState(1)
    const[res , setRes] = useState([])

    useEffect(() => {
        let bag = []
        for(let i=0; i<ct; i++){
            bag.push(1)
        }
        setRes(bag)
    },[ct])
  return (
    <div>
        {/* <p>{ct}</p>
        <p>{res}</p> */}
        <button onClick={() => setCt(ct+1)}>+</button>
        <button onClick={() => {
            if(ct >= 1){
                setCt(ct-1)
            }
        }}>-</button>
        <div className='mainDivflex'>
        {
            res.map((e) => (
                <div className='Clicking' tabIndex="1" style={{backgroundColor:"red" , width: "100px" , height:"100px" , borderRadius:"100%" }} ></div>
 
            ))
        }
        </div>
      {/* <div style={{backgroundColor:"red" , width: "100px" , height:"100px" , borderRadius:"100%" }}></div> */}
    </div>
  )
}
