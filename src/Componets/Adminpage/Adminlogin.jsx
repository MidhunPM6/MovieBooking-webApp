import React, { useState } from "react";
import loginimg from '../../images/admin-login.png'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Adminlogin() {
  const[email,setEmail]=useState("")
  const [password,setPassword]=useState('')

  const navigate=useNavigate()

  const handlelogin=async(e)=>{
    e.preventDefault()
    try {
    await signInWithEmailAndPassword(auth,email,password)
    toast.success("User Login Successfull",{
      position:"top-right",
      autoClose:2000,
      onClose:()=>navigate('/adminpannel')

    })
      
    } catch (error) {
      toast.error("Please check you entered",{
        position:"top-right",
        autoClose:2000,
      })
      
    }
    

  }

  
  const handleregister=()=>{
    navigate('/adminsignup')


  }
  return (
    
      <div className="mb-16">
      <div className="flex place-content-center mr-16 mt-20">
        <div className="bg-yellow-400 w-[360px] h-[500px] rounded-l-lg place-content-center  ">
          <img src={loginimg} alt=""  className="w-57"/>
        </div>

        <div className="bg-slate-200 w-[360px] rounded-r-lg pt-32">
          <ToastContainer/>
        <div className="flex place-content-center">
            <h1 className="text-black mb-10 font-bold text-3xl">Login</h1>
          </div>
          
          
          <form action="" className="flex flex-col ">
            <input
              type="text"
              placeholder="Enter Username"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-50 outline-none hover:outline-gray-300 focus:outline-gray-400 "
            />
            <input
              type="password"
              placeholder="Enter Password "
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className=  " py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-50 outline-none hover:outline-gray-300 focus:outline-gray-400 mt-6"
            />
            <div className="flex text-white">
              <button onClick={handlelogin}className="bg-yellow-400 text-white py-2 w-36  rounded-lg hover:bg-white hover:text-black hover:border-solid border-2 border-yellow-400 drop-shadow-md ml-12 mt-12" >
                Login
              </button>
              <button className="mt-12 ml-2 text-black hover:text-slate-400" onClick={handleregister}>Create an account?</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adminlogin;
