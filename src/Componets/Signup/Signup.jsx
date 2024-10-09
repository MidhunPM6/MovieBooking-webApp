import React from 'react'
import loginimg from "../../images/Login-img1.svg";
import Headerlogo from "../../images/Header-logo.png";

function Siginup() {
  return (
    <div className="mb-20">
      <div>
        <img src={Headerlogo} alt="" className="w-48 ml-20 mt-4" />
      </div>
      <div className="flex">
        <div className="mr-48 pl-28">
          <img src={loginimg} alt="" className="w-[600px]" />
        </div>



        <div className="w-[400px]  pt-24 mr-20 mt-10  border-solid border-2 border-gray-200 rounded-lg drop-shadow-sm ">
        <div className="flex place-content-center">
        <h1 className="text-black mb-10 font-bold text-3xl">Sign Up</h1>
        </div>
            
          <form action="" className="flex flex-col ">
          <input
              type="text"
              name=""
              placeholder="Enter Your Name "
              id=""
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-100 outline-none hover:outline-gray-300 focus:outline-gray-400 mb-4"
            />
            <input
              type="text"
              name=""
              placeholder="Enter Your Number"
              id=""
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-100 outline-none hover:outline-gray-300 focus:outline-gray-400 mb-4"
            />
            <input
              type="email"
              name=""
              placeholder="Enter Your Email"
              id=""
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-100 outline-none hover:outline-gray-300 focus:outline-gray-400"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder=" Enter Your Password"
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-100 mt-5 outline-none hover:outline-gray-300 focus:outline-gray-400"
            />
            <div className="flex items-center mt-16">
              <button
                type="submit"
                className="bg-yellow-400 text-white py-2 w-36 ml-12 rounded-lg hover:bg-white hover:text-black hover:border-solid border-2 border-yellow-400 drop-shadow-md "
              >
                Login
              </button>
              <a href="ww" className="pl-6">
                Click here to register
              </a>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Siginup
