import React from "react";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  const id = useParams()
  // console.log(id);
  return (
    <div className="my-4 flex gap-4 items-center max-sm:justify-start max-sm:ml-3">

        <Link className="bg-slate-200 text-xs px-2 py-1 rounded-sm" to="/">Home</Link>
        <Link className="bg-slate-200 text-xs px-2 py-1 rounded-sm" to="/addimage">Add Image</Link>
        <Link className="bg-slate-200 text-xs px-2 py-1 rounded-sm" to="/uploaded-image">Uploaded images</Link>        
      
    </div>
  );
};

export default Navbar;
