import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "../api/axios";
import Images from "./Images";
import { Imageindex } from "../contextIndex/IndexContext";

const Preview = () => {
  const { id } = useParams();
  let   {page , setpage} = useContext(Imageindex)

  const [currentimagelist, setcurrentimagelist] = useState({});
  const [imgurl, setimgurl] = useState("");
  const [photgraphername, setphotgraphername] = useState("");
  const [photgrapherurl, setphotgrapherurl] = useState("");
  const [randomimages, setrandomeimages] = useState([]);
  let [randome, setrandome] = useState(0);
  console.log(randome);

  const searhbyid = async () => {
    try {
      const { data } = await axios.get(`photos/${id}`);
      console.log(data);
      setcurrentimagelist(data);
      setimgurl(data.src.landscape);
      setphotgraphername(data.photographer);
      setphotgrapherurl(data.photographer_url);
    } catch (error) {
      console.log(error);
    }
  };

  const randomeimages = async () => {
    try {
      const { data } = await axios.get(`/curated?page=${randome}&per_page=10`);
      console.log(data);
      setrandomeimages(data.photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searhbyid();
    setrandome(Math.floor(Math.random() * 20));
    randomeimages();
  }, [id]);
  return (
    <div className="w-full px-10 mt-5">
      <div className="imagediv w-[100%]  bg-red-100">
        <img
          className="w-full object-contain "
          src={
            imgurl
              ? imgurl
              : "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
          }
          alt=""
        />
      </div>

      <div className="profile flex py-4 items-center justify-between">
        <div className="div flex items-center ">
          <div className="userprofile w-[60px] h-[60px] bg-red-300 rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://st4.depositphotos.com/14903220/22197/v/450/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg"
              alt=""
            />
          </div>
          <h1 className=" bg-slate-200 w-max px-4 ml-3 py-1 rounded">
            {photgraphername}
          </h1>
        </div>
        <a download href={`${imgurl}`}>
          <button>
            <i className="ri-download-line text-2xl bg-slate-200 p-2 rounded-full"></i>
          </button>
        </a>
      </div>
      <div className="randomimgess flex gap-2 justify-center flex-wrap">
        {randomimages.length > 0 ? (
          randomimages.map((image) => <Images image={image} key={image.id} />)
        ) : (
          <h1>Loading....</h1>
        )}
      </div>

      {
        useLocation().pathname.split("/")[1] === 'preview-image' ? <></>  :  <div className="w-full flex items-center justify-between mt-10">
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
      }
    
    </div>
  );
};

export default Preview;
