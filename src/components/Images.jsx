import React, { useState } from "react";
import { Link } from "react-router-dom";

const Images = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const handleclick = (image)=>{
    console.log(image);

  }
  return (
    
    <div
      className="image w-[286px] h-[300px] bg-slate-50 shadow-lg rounded-md p-2 max-sm:w-full hover:shadow-lg"
      key={image.id}
      
    >
      <Link to={`/preview-image/${image.id}`}>
      <div className="img w-full h-[85%] bg-slate-300 relative border ">
        {isLoading && (
          <img
            src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        )}
        <img
          className={`w-full h-full object-cover ${
            isLoading ? "hidden" : "block"
          }`}
          src={image.src.medium}
          alt=""
          onLoad={handleImageLoaded}
          onClick={(e)=> handleclick(image)}
        />
      </div>
      </Link>
      <div className="description text-sm flex h-[15%] w-full items-center justify-between">
        <h2>{image.photographer}</h2>
          <Link download={`${image.src.medium}`} >
            <i className="ri-download-line"></i>
            </Link>
      </div>
    </div>
    
  );
};

export default Images;
