import React, { useState } from "react";
import siginupimg from "../../images/admin-login.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function AdminSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlelogin =()=>{
    navigate('/adminlogin')
  }

  const handlesignup = async (e) => {
    e.preventDefault();

    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "Admin", data.user.uid), {
        name: name,
      });
      toast.success("Signed Sucessfully", {
        position: "top-right",
        autoClose: 2000,
        onClose: () => navigate("/adminlogin"),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mb-20">
      <div className="flex place-content-center mr-16 mt-16">
        <div className="bg-yellow-400 w-[360px] h-[500px] rounded-l-lg place-content-center  ">
          <img src={siginupimg} alt="" className="w-57" />
        </div>

        <div className="bg-slate-200 w-[360px] rounded-r-lg pt-14">
          <ToastContainer />
          <div className="flex place-content-center">
            <h1 className="text-black mb-10 font-bold text-3xl">Sign Up</h1>
          </div>

          <form action="" className="flex flex-col ">
            <input
              type="text"
              placeholder="Enter Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-50 outline-none hover:outline-gray-300 focus:outline-gray-400 "
            />
            <input
              type="email"
              placeholder="Enter email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-50 outline-none hover:outline-gray-300 focus:outline-gray-400 mt-6"
            />
            <input
              type="password"
              placeholder="Enter Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 rounded-lg ml-12 mr-12 placeholder:text-center bg-gray-50 outline-none hover:outline-gray-300 focus:outline-gray-400 mt-6"
            />
            <div className="flex text-white">
              <button
                onClick={handlesignup}
                className="bg-yellow-400 text-white py-2 w-36  rounded-lg hover:bg-white hover:text-black hover:border-solid border-2 border-yellow-400 drop-shadow-md ml-12 mt-12"
              >
                Sign up
              </button>
              <button onClick={handlelogin}className="mt-12 ml-2 text-black hover:text-slate-400">
                Already an account?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminSignup;
