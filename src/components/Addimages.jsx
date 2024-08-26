import React, { useContext, useEffect, useState } from 'react'
import { Imageindex } from '../contextIndex/IndexContext'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Addimages = () => {

  const navigate = useNavigate()
  const { personlimage, setpersonalimage } = useContext(Imageindex)

  const [title, settitle] = useState("")
  const [imgurl, setimgeurl] = useState("")
  const [authorname, setauthorname] = useState("")

  // console.log(personlimage);

  const handelsubumit = (e)=>{
    e.preventDefault()
    let newdata = {
      id:uuidv4(),
      title:title,
      imgurl:imgurl,
      authorname:authorname 
    }

    localStorage.setItem('personlimage', JSON.stringify([...personlimage, newdata]));  
    navigate('/uploaded-image')
  }

  useEffect(()=>{
    if(personlimage.length === 0){
      setpersonalimage([])
    }else{
      setpersonalimage(JSON.parse(localStorage.getItem('personlimage')));
    }
  },[])

  return ( 
    <div className='mt-5 max-sm:-full max-sm:px-3 ml-10 max-sm:ml-0' >
      <h1 className='font-semibold text-lg'>Add Images </h1>
      <form action="" className='bg-slate-200 p-2 rounded-lg flex flex-col w-1/2 gap-2 max-sm:w-full'>
        <input className='px-3 py-1 rounded' type="url" placeholder='Past URL Link' value={imgurl}  onChange={e=>setimgeurl(e.target.value)} />
        <input className='px-3 py-1 rounded' type="text" placeholder='Image Title' value={title} onChange={e=>settitle(e.target.value)} />
        <input className='px-3 py-1 rounded' type="text" placeholder='Author name' value={authorname} onChange={e=>setauthorname(e.target.value)} />
        <button onClick={(e)=>handelsubumit(e)} className='w-max bg-blue-500 py-1 px-4 rounded text-white'>Submit </button>
      </form>
    </div>
  )
}

export default Addimages