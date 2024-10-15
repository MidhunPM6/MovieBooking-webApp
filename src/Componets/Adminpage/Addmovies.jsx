import React from 'react'
import Logoimg from '../../images/Header-logo.png'

function Addmovies() {


  return (
    <div>
      <div className="w-36 md:w-48 mt-4 md:ml-20 mb-4 md:mb-0">
        <img src={Logoimg} alt="Logo" />
      </div>
      <div>
        <form action="" className='flex flex-col md:items-start m-10  mb-6'>
        <label htmlFor="" >Movie Name </label>
         <input type="text" placeholder='Enter movie name' className='py-3 px-10' />
         <label htmlFor="time"></label>
         <input type="text" placeholder='Enter movie name' />
         </form>
         
      </div>
    </div>
  )
}

export default Addmovies
