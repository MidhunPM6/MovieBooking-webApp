import React from "react";
import img from "../../images/Header-logo.png";
import loginimg from '../../images/admin-login.png'

function Adminlogin() {
  return (
    <div className="mb-20">
      <div className="w-48 ml-20 mt-4">
        <img src={img} alt="" />
      </div>

      <div className="flex place-content-center mr-16 mt-20">
        <div className="bg-yellow-400 w-[360px] h-[500px] rounded-l-lg place-content-center  ">
          <img src={loginimg} alt=""  className="w-57"/>
        </div>

        <div className="bg-slate-200 w-[360px] rounded-r-lg pt-32">
        <div className="flex place-content-center">
            <h1 className="text-black mb-10 font-bold text-3xl">Login</h1>
          </div>
          
          
          <form action="" className="flex flex-col ">
            <input
              type="text"
              placeholder="Enter Username"
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-50 outline-none hover:outline-gray-300 focus:outline-gray-400 "
            />
            <input
              type="text"
              placeholder="Enter Password "
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-50 outline-none hover:outline-gray-300 focus:outline-gray-400 mt-6"
            />
            <div className="flex text-white">
              <button className="bg-yellow-400 text-white py-2 w-36  rounded-lg hover:bg-white hover:text-black hover:border-solid border-2 border-yellow-400 drop-shadow-md ml-12 mt-12" >
                Login
              </button>
              <button className="mt-12 ml-2 text-black hover:text-slate-400">Create an account?</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
