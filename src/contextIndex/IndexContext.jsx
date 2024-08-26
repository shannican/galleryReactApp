import React, { createContext, useEffect, useState } from "react";
import axios  from "../api/axios";
export const Imageindex = createContext(null);


const IndexContext = (props) => {
  const [images, setimages] = useState([]);
  const [search, setsearch] = useState("")
  let [page, setpage] = useState(1)
  const [personlimage , setpersonalimage] = useState([])

  const homeimages = async () => {
    try {
      const {data} = await axios.get(`/curated?page=${page}&per_page=20`);
      // console.log(data.photos);
      setimages(data.photos)
    } catch (error) {
      console.log(error);
    }
  };

  let data={
    images,
    setimages,
    search,
    setsearch,
    page,
    setpage,
    personlimage,
    setpersonalimage,
  }

  useEffect(()=>{
    homeimages()
  },[page])
  return (
    <Imageindex.Provider value={data}>
      {props.children}
    </Imageindex.Provider>
  );
};

export default IndexContext;
