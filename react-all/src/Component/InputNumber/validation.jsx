import React from 'react'

export default function validation() {
  return (
    <div>
        <input type = "text" placeholder='Number Enter' value={num} onChange={(e) => handelChange(e)} />
        <h1>{num}</h1>
    </div>
  )
}
