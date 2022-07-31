import React , {useState} from 'react'

const Togg = () => {
const [toggle, setToggle] = useState(false);

const handleClick = ()=>{
setToggle(!toggle);
}
  return (
    <div>
      <h1>Toggle-Btn</h1>
      <button type='button' onClick={handleClick} >
     {toggle? 'ON' : 'OFF'}
     </button>
    </div>
  )
}

export default Togg
