import React from 'react'
import Typewriter from "typewriter-effect";

const TypeWrite = () => {
    const arr = ["ZFUNDS", "XFUNDS", "YFUNDS"]
  return (
    <div>
    {


<Typewriter
  options={{
    strings: arr,
    autoStart: true,
    loop: true,
  }}
/>




}
    </div>
  )
}

export default TypeWrite;
