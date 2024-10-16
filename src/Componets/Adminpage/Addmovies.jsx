import React from 'react'
import Logoimg from '../../images/Header-logo.png'
import Calendar from 'react-calendar';
import Datepicker from "react-tailwindcss-datepicker";


function Addmovies() {


  return (
    <div>
      <div className="w-36 md:w-48 mt-4 md:ml-20 mb-4 md:mb-0">
        <img src={Logoimg} alt="Logo" />
      </div>
      <div>
        <form action="" className='flex flex-col md:items-center m-10  mb-6'>
        <label className='mb-3 text-gray-700' >Movie Name </label>
         <input type="text" placeholder='Enter movie name' className=' placeholder:text-center py-2 px-16 border-2 border-gray-200 hover:outline-gray-300 focus: outline-gray-400 rounded-lg' />
         <label className='mb-3 text-gray-700 mt-3' >Theatre name  </label>
         <input type="text" placeholder='Enter the theater name ' className=' placeholder:text-center py-2 px-16 border-2 border-gray-200 hover:outline-gray-300 focus: outline-gray-400 rounded-lg' />
         
         <label className='mb-3 text-gray-700 mt-3' >Preview</label>
         
         <div className=' flex flex-col place-content-center'>
         
         <input type="text"  className=' py-16 px-2 border-2 border-gray-200 hover:outline-gray-300 focus: outline-gray-400 rounded-lg' />
         <label className='mb-3 text-gray-700 mt-3' >Upload Movie Poster</label>
         <input  type="file" name="Upload poster" />
         </div>
         
         
           </form>
         
         
      </div>
    </div>
  )
}

export default Addmovies
