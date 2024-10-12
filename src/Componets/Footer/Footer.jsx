import React from 'react'
import {useNavigate} from 'react-router-dom'

function Footer() {

const  Navigate=useNavigate()
 
 const handleadminlogin=()=>{
  Navigate('/admin')

}
 const handlehome=()=>{
  Navigate('/')

}

  return (
    <div>
      
      <div className='bg-slate-900 text-gray-400 flex h-[200px] place-content-center '>
        <div className='flex items-end'>
      <a href="ww" className=''><h1>Terms and conditions</h1></a>
        </div>
        <div className='place-content-center '>
            <button onClick={handlehome}>Home</button>
            
            <a href="ww"><h1>Copyright</h1></a>

            
        </div>
        <div className='place-content-center pl-10'>
            <a href="ww"><h1>Contact Us</h1></a>
            <a href="ww"><h1>About Us</h1></a>
            <button onClick={handleadminlogin}>Admin Panel</button>
            

        </div>

      </div>
    </div>
  )
}

export default Footer
