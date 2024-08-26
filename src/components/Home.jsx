import React, { useContext, useEffect, useState } from "react";
import Images from "./Images";
import { Imageindex } from "../contextIndex/IndexContext";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";

const Home = () => {
  const { images, setimages, search, setpage } = useContext(Imageindex);
  let { page } = useContext(Imageindex);
  // console.log(page);

  const searchimage = async () => {
    try {
      const { data } = await axios.get(`/search?query=${search}`);
      console.log(data);
      setimages(data.photos);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search.length > 0) {
      searchimage();
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [search,page]);

  return (
    <div className="w-full mb-20 px-10 max-sm:mb-10">
      <Searchbar />
      <div className="images flex flex-wrap gap-3 justify-center w-full">
        {images.length > 0 ? (
          images.map((image) => <Images image={image} key={image.id} />)
        ) : (
          <h1>Loading....</h1>
        )}
        <div className="w-full flex items-center justify-between mt-10">
          <div
            onClick={() => page > 1 && setpage((page -= 1))}
            className=" bg-slate-800 text-white px-5 rounded py-1 prev"
          >
            <i className="ri-arrow-left-s-line"></i> Prev
          </div>
          <div
            onClick={() => setpage((page += 1))}
            className=" bg-slate-800 text-white px-5 rounded py-1 next"
          >
            Next <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
