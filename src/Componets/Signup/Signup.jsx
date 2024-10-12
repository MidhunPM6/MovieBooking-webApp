import React, { useState } from "react";
import loginimg from "../../images/Login-img1.svg";
import Headerlogo from "../../images/Header-logo.png";
import { auth, db } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";



function Siginup() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate()

  const handlesignup = async (e) => {
    e.preventDefault();

    
      const data = await createUserWithEmailAndPassword(auth, email, password);
      try{
      await setDoc(doc(db, "UserDetails", data.user.uid), {
        name: name,
        Number: number,
        
      });

       toast.success("User Signed Successfully",{
        position:"top-right",
        autoClose:2000,
        onClose: ()=>navigate('/login')
       })
      }catch(error){
        toast.error("User Sign up failed",{
          position:"top-right",
          autoClose:2000,
        })
  

      }


      
      

    

      
    } 


  return (
    <div className="mb-20">
       <ToastContainer/>
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
              name="username"
              placeholder="Enter Your Name "
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-100 outline-none hover:outline-gray-300 focus:outline-gray-400 mb-4"
            />
            <input
              type="text"
              name="numberr"
              placeholder="Enter Your Number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-100 outline-none hover:outline-gray-300 focus:outline-gray-400 mb-4"
            />
            <input
              type="email"
              name="mail"
              placeholder="Enter Your Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-100 outline-none hover:outline-gray-300 focus:outline-gray-400"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-100 mt-5 outline-none hover:outline-gray-300 focus:outline-gray-400"
            />
            <div className="flex items-center mt-16 place-content-center">
              <button
                type="submit"
                className="bg-yellow-400 text-white py-2 w-36  rounded-lg hover:bg-white hover:text-black hover:border-solid border-2 border-yellow-400 drop-shadow-md  "
                onClick={handlesignup}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Siginup;
