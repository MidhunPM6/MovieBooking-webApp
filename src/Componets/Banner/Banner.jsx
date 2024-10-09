import React from 'react'
import img from '../../images/Banner.png'

function Banner() {
  return (
    <div>
        <div className='flex  bg-stone-950 '>
        <img src={img} alt="" className='max-w-[1423px] mt-5' />
        </div>
    </div>
  )
}

export default Banner
