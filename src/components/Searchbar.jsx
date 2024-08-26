import React, { useContext, useState } from "react";
import { Imageindex } from "../contextIndex/IndexContext";

const Searchbar = () => {
  const { setsearch } = useContext(Imageindex);
  return (
    <div className="searchbarbg my-3 shadow-lg w-full h-[40vh] max-sm:h-[18vh]  relative rounded-md file:">
      <input
        className="bg-slate-50  px-4 py-2  rounded-md opacity-80 w-1/2 max-sm:w-[80%] outline-none absolute top-[50%]  left-[50%] -translate-x-[50%] -translate-y-[50%]"
        type="text"
        placeholder="search"
        onChange={(e) => setsearch(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
