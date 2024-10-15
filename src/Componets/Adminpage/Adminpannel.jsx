import React, { useEffect } from "react";
import img from "../../images/Post.jpg";








function Adminpannel() {



  return (
    <div className="bg-black max-h-[700px]">
      <div className=" flex place-content-center max-w-fit  ml-24">
        <div>
          <h1>Title</h1>
        </div>
        <div className=" flex  mr-6 overflow-x-scroll overflow-y-hidden">
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
        </div>
        
        
      </div>
      <div className=" flex place-content-center max-w-fit  ml-24">
        <div>
          <h1>Title</h1>
        </div>
        <div className=" flex  mr-6">
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
          <img src={img} alt="" className="max-w-60 max-h-72 p-2" />
        </div>
        
      </div>
    </div>
  );
}

export default Adminpannel;
