import React from 'react'

const Footer = () => {
  return (
    <div className='py-10 bg-slate-200 px-10 flex justify-around mt-10  max-sm:flex-col max-sm:p-3 max-sm:flex-wrap max-sm:justify-center '>
        <div className="left">
            <h1 className='mainheading text-4xl max-sm:text-2xl'>Media Gallery</h1>
            <div className="sociallogos flex gap-3 my-5 max-sm:my-2">
            <i className="text-2xl text-white max-sm:text-sm bg-slate-800 px-2 py-1 rounded  ri-instagram-fill"></i>
            <i className="text-2xl text-white max-sm:text-sm bg-slate-800 px-2 py-1 rounded  ri-linkedin-box-fill"></i>
            <i className="text-2xl text-white max-sm:text-sm bg-slate-800 px-2 py-1 rounded  ri-facebook-box-fill"></i>
            <i className="text-2xl text-white max-sm:text-sm bg-slate-800 px-2 py-1 rounded  ri-twitter-x-fill"></i>
            </div>
        </div>
        <div className="about">
          <h1 className='text-lg font-semibold capitalize' >shop Match</h1>
          <p className='text-sm '>Just for match</p>
          <p className='text-sm '>the trial kit</p>
          <p className='text-sm '>whole sale bluck</p>
        </div>
        <div className="Learn">
          <h1 className='text-lg font-semibold capitalize' >Match Images</h1>
          <p className='text-sm '>Licence Content</p>
          <p className='text-sm '>Quality Images</p>
        
        </div>
        <div className="more">
          <h1 className='text-lg font-semibold capitalize' >Our story</h1>
          <p className='text-sm '>Blog</p>
          <p className='text-sm '>Affiliate</p>
          <p className='text-sm '>sign in</p>

        </div>
    </div>
  )
}

export default Footer