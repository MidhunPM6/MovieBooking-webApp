import React from 'react'
import Logoimg from "../../images/Header-logo.png";

function NavBar() {
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
    </div>
  </div>
  
    
  )
}

export default NavBar
