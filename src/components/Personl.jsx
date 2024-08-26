import React, { useContext, useEffect } from "react";
import { Imageindex } from "../contextIndex/IndexContext";
import Card from "./Card";

const Personl = () => {
  const { personlimage, setpersonalimage } = useContext(Imageindex);

  useEffect(()=>{
    setpersonalimage(JSON.parse(localStorage.getItem('personlimage')));
  },[])
  return (
    <div className="ml-10 py-5 max-sm:ml-4">
      <h1 className="text-lg font-semibold ">Uploaded Image</h1>
      <div className="images flex flex-wrap gap-3 justify-center">
        {personlimage && personlimage.length > 0? (
          personlimage.map((image) => <Card key={image.id} image={image}/>)
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
};

export default Personl;
