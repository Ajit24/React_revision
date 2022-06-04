import React, { useState } from 'react'

export default function OnBlurInput() {

    const [name, setName] = useState("")

    const [display, setDisplay] = useState(true)

    const handleBlur = () => {
        setDisplay(false)
    }

    return (
        <div>
            <h1>On Blur</h1>

            {
                display ? <><input type="text" placeholder='Add name' value={name} onChange={(e) => setName(e.target.value)} onBlur={handleBlur} />
                </> :
                    <>
                        <input type="text" value={name} />
                    </>
            }


        </div>
    )
}