import React, { useContext, useEffect } from "react";
import Routers from "./routers/Routers";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full max-sm:-full  bg-purple-50 p-[0.1px]">
      <div className="topnav flex items-center justify-between px-10 mt-5 max-sm:mt-1 max-sm:px-2 max-sm:flex-col max-sm:items-start">
        <h1 className="mainheading text-3xl  max-sm:mt-4 bg-purple-200  px-8 rounded-md  max-sm:ml-3 py-2 ">
          Media Gallery
        </h1>
        <Navbar />
      </div>
      <Routers />
      <Footer />
    </div>
  );
};

export default App;
