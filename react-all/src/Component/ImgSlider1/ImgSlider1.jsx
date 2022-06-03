import React from 'react'
import { useState } from 'react'

const ImgSlider1 = () => {
    
    const images = [sweater1, sweater2, sweater3, sweater4];
  const [activeImage, setActiveImage] = useState(0);

  function next() {
    if (activeImage < 3) {
      setActiveImage(activeImage + 1);
    } else {
      setActiveImage(3);
    }
  }

  function previous() {
    if (activeImage > 0) {
      setActiveImage(activeImage - 1);
    } else {
      setActiveImage(0);
    }
  }


  return (
    <div className="App">
    <h1>Image slider in ReactJS</h1>
    <button className="previous" onClick={previous}>prev</button>
    <img src={images[activeImage]} alt="shirt" width="50%" height="400px" />
    <button className="next"  onClick={next}>next</button>
  </div>
  )
}

export default ImgSlider1
