import React, { useContext } from "react";
import img from "../../images/Header-logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/userContext";
import {auth} from '../../firebase/config'

function Header() {
  const Navigate = useNavigate();
  const { user } = useContext(AuthContext);

   const handlelogout=()=>{

    auth.signOut()
    window.location.reload()
    
   }

  const loginhandle = () => {
    Navigate("/login");
  };

  return (
    <div className="bg-yellow-400 text-neutral-600 font-mono">
      <div className=" h-[70px] flex justify-between items-center">
        <h1>
          <img src={img} alt="" className="w-40 pl-4 ml-6" />
        </h1>

        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            id=""
            className="mr-2 py-2 px-32 placeholder:text-center bg-slate-200 rounded-xl outline-none hover:outline-yellow-300 focus:outline-yellow-200"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 hover:cursor-pointer hover:text-slate-200"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <ul className="flex justify-between items-center ">
          <a href="ww" className="mr-7 hover:text-black">
            <li> Home</li>
          </a>
          <a href="ww" className="mr-7  hover:text-black">
            <li>Now Showing</li>
          </a>
          <a href="ww" className="mr-7  hover:text-black">
            <li>Profile</li>
          </a>

          {user ? (
            <div className="flex ">
              <button className="mr-7 bg-white text-black py-2 px-7 rounded-2xl drop-shadow-lg hover:bg-stone-600 hover:text-white">
                <li className="flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-4 mr-2 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {user}
                </li>
              </button>
              <button className="mr-7 bg-white text-black py-2 px-7 rounded-2xl drop-shadow-lg hover:bg-stone-600 hover:text-white" 
               onClick={handlelogout}
               >
                <li>Logout</li>
              </button>
            </div>
          ) : (
            <button
              onClick={loginhandle}
              className="mr-7 bg-white text-black py-2 px-7 rounded-2xl drop-shadow-lg hover:bg-stone-600 hover:text-white"
            >
              <li>Login</li>
            </button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
