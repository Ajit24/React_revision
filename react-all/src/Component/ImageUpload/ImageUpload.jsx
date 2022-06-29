import React, {useState} from 'react'
import "./ImageUpload.css"

const ImageUpload = () => {
    const[img, setImg] = useState();
    
    const uploadImage = (e)=>{
        setImg(URL.createObjectURL(e.target.files[0]));
    }
    console.log("img:",  img);
  return (
    <div>
      <input
       type="file"
       className='imagefile'
       accept='image/*'
       onChange={uploadImage}
      />
              <div className="img_box">{img && <img src={img} alt="images" />}</div>

    </div>
  )
}

export default ImageUpload
