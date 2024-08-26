import React, { useContext } from "react";
import { Imageindex } from "../contextIndex/IndexContext";

const Card = ({image}) => {
  const { personlimage, setpersonalimage } = useContext(Imageindex);
  const handelDelete = (id)=>{

    if (confirm("Do You Want To Delete") == true) {
      const newpersonlimage = personlimage.filter((item)=>{
        return item.id!== id
      })
      setpersonalimage(newpersonlimage)
      localStorage.setItem('personlimage', JSON.stringify(newpersonlimage)); 
    } else {
      return;
    }
 
  }
  return (
    <div className="image w-[250px] h-[300px] bg-slate-50 rounded-md p-2 ">
      <div className="cardimg  w-full h-[85%] bg-red-200">
        <img className="w-full h-full object-cover" src={image.imgurl} alt="" />
      </div>
      <div className="description text-sm flex h-[15%] w-full items-center justify-between">
        <h2>{image.title}</h2>
        <div className="secondddi flex gap-3">
        <a download href={image.imgurl}>
          <button>
            <i className="ri-download-line"></i>
          </button>
        </a>
        <div onClick={()=>handelDelete(image.id)} className="deletebttn">
        <i class="ri-delete-bin-6-line"></i>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
