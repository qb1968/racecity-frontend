import React from 'react';
import { useState } from 'react';


const ShowImage2 = () => {
     
const [image, setImage] = useState("");
const [url, setUrl] = useState("");

const uploadImage = () => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "comics");
  data.append("cloud_name", "qb1968");
  fetch(" 	https://api.cloudinary.com/v1_1/qb1968/image/upload", {
    method: "post",
    body: data,
  })
    .then((resp) => resp.json())
    .then((data) => {
      setUrl(data.url);
    })
    .catch((err) => console.log(err));
};


   return (
     <div className="product-img" style={{ height: "250px" }}>
       <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
       <button onClick={uploadImage}>Back Image</button>
       <img src={url} alt="" />
     </div>
   );
    }
export default ShowImage2
    