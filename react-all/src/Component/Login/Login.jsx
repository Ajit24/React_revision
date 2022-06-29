import React, { useState } from "react";

export default function Login() {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [btn, setBtn] = useState(false);

  const handleCahnge = (e) => {
    setStr1(e.target.value);
    //console.log(str1);
  };
  const handleCahnge2 = (e) => {
    setStr2(e.target.value);
     //console.log(str2);
  };
  const handleClick = () => {
    if (str1 === "admin" && str2 === "admin") {
      setBtn(true);
    } else {
      setBtn(false);
    }
}
    return (
      <>
        {btn ? <h1>Welcome to the Home page</h1>:<h1>Please enter correct username and password</h1>}
        <input type="text" onChange={handleCahnge}></input>
        <input type="password" onChange={handleCahnge2}></input>
        <button onClick={handleClick}>Click</button>
      </>
    );
  };
