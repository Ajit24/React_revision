import React, {useState} from 'react'
import './Toggle.css';
const Toggle = () => {
    const [toggleButton, setToggleButton] = useState(false)

    const handleClick = () =>{
        setToggleButton(!toggleButton);
        console.log(toggleButton, "value")
    }

  return (
    <div className='Appp'>
      <h2>Toggle-Button</h2>
      <div className='toggle' onClick={handleClick}>
       { toggleButton?<div className='toggle_left'></div> :
       <div className='right'></div>}
      </div>
      

    </div>
  )
}

export default Toggle
