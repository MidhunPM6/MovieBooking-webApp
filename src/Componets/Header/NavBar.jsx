import React, { useContext } from "react";
import Logoimg from "../../images/Header-logo.png";
import { useNavigate } from "react-router-dom";
import { AdminAuth } from "../../context/adminContext";
import { auth } from "../../firebase/config";

function NavBar() {
  const navigate = useNavigate();
  const { adminUser } = useContext(AdminAuth);

  const handlelogin = () => {
    navigate("/adminlogin");
  };

 const handleaAddMovies=()=>{
  navigate('/addmovies')

  }
  const handlelogout=()=>{
    auth.signOut()
    window.location.reload()
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4">
      <div className="w-36 md:w-48 mt-4 md:ml-20 mb-4 md:mb-0">
        <img src={Logoimg} alt="Logo" />
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 md:pl-32 font-mono">
        <button className="text-slate-500 hover:text-black hover:underline underline-offset-4">
          Home
        </button>
        <button className="text-slate-500 hover:text-black hover:underline underline-offset-4">
          Movies
        </button>
        <button className="text-slate-500 hover:text-black hover:underline underline-offset-4">
          About Us
        </button>
        {adminUser ? (
          <div className="md:space-x-12 flex items-center">
            <button  onClick ={handleaAddMovies} className="text-slate-500 hover:text-black hover:underline underline-offset-4">
              Add Movies
            </button>

            <button className=" text-black outline outline-yellow-400 px-7 py-2 flex items-center rounded-lg hover:bg-yellow-400 hover:text-white">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 mr-2 "
              >
                <path
                  fillrule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  cliprule="evenodd"
                />
              </svg>{" "}
              {adminUser.name}
            </button>
            <button onClick={handlelogout} className=" py-2 px-4 bg-yellow-400 text-white rounded-md hover: outline outline-yellow-400 hover:bg-white hover:text-black">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handlelogin}
              className="text-slate-500 hover:text-black hover:underline underline-offset-4"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
