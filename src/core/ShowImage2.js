import React from "react";
import { API } from "../config";
import SingleSource from "./SingleSource";
import ReactImageFallback from 'react-image-fallback';


const ShowImage2 = ({ item, url }) => (
  <div className="product-img" style={{ height: "250px" }}>
    
      <SingleSource
        src={`${API}/${url}/image/${item._id}`}
        alt={item.name}
      className="mb-3"
     
        style={{
          objectFit: "contain",
          height: "100%",
          width: "100%",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        
       
      />
   
    {/* <img
      src={`${API}/${url}/photo2/${item._id}`}
      
      className='mb-3'
      style={{ objectFit: 'contain', height: '100%', width: '100%', display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}
    /> */}
  </div>
);

export default ShowImage2;
