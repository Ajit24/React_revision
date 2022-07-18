import React, {useState} from 'react'

const CopyText = () => {

    const [copyText, setcopyText] = useState();

    const handleCopy = ()=>{
navigator.clipboard.writeText(copyText);
alert(" Text is Copied");
    }
  return (
    <div>
      <h2>Copy-to-clipboard</h2>
         
         <input type="text" placeholder='type number ....' value={copyText} onChange = {(e) => setcopyText(e.target.value)} />
         <button onClick={handleCopy}>COPY</button>
    </div>
  )
}

export default CopyText
