import React, { useState } from "react";
//import "./Filter.css";

const Filter = () => {

     // make a input box
  let data = ["Sun", "Son", "Some", "Rest", "Test", "Clear", "Many"];
  const [word, setWord] = useState([]);

  console.log(word);

  const dataChange = (e) => {
    const { value } = e.target;
    console.log(value);

    let arr = data.filter((post) =>
      post.toLowerCase().includes(value.toLowerCase())
    );
    // console.log(arr)

    if (value.length != 0) {
      setWord([...arr]);
    }
}
    // else

  return (
    <div className="App">
      <div className="outBox">
        <input type="text" onChange={dataChange} style = {{height:"35px", width:"155px"}} />
        {word.map((ele) => {
          return <p>{ele}</p>;
        })}
      </div>
    </div>
  )
    }

export default Filter;
