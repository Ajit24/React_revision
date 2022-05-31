import React, { useEffect, useState } from 'react'

export default function StopAfterSomeTime() {

    const[sec, setSec] = useState(0)
    const[min , setMin] = useState(0)
    const[visible, setVisible] = useState(false)

    useEffect(() => {

        setTimeout(() => {
           if(visible){
            if(min == 2){
                alert("done")
                setMin(0)
                setSec(0)
                setVisible(false)
                clearTimeout()
            }
            else{
                if(sec == 60){
                    setMin(min + 1)
                    setSec(0)
                }
                else{
                    setSec(sec + 1)
                }
            }
           }

            
            
        },200)

    },[sec, min, visible])

  return (
    <div>
      <h1>Stop after sometimes .. !! </h1>
      <h1>{min}</h1>
      <h1>{sec}</h1>
      <button onClick={() => setVisible(true) }>start</button>
    </div>
  )
}