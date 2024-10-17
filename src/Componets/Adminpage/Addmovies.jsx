import React, { useState } from "react";
import Logoimg from "../../images/Header-logo.png";
import { imageDB } from "../../firebase/config";
import {v4} from 'uuid'
import {ref ,getDownloadURL ,uploadBytes} from 'firebase/storage'



function Addmovies() {

const [movies,setMovies]=useState('')
const [theater,setTheater]=useState('')
const [poster,setPoster]=useState('')
const [imgurl,setImgurl]=useState('')


const handleaddMovie = async() => {
  const imgRef= ref(imageDB,`/images  ${poster.name +v4()}`)
  await uploadBytes(imgRef, poster).then((data)=>{
    getDownloadURL(data.ref).then((imgurl)=>{
      console.log(imgurl);
      setImgurl(imgurl)
    })
  })
  
}
  return (
    <div>
      <div className="w-36 md:w-48 mt-4 md:ml-20 mb-4 md:mb-0 ">
        <img src={Logoimg} alt="Logo" />
      </div>
      <div className=" flex place-content-center">
        <form
          action=""
          className="flex flex-col md:items-center m-10  mb-6 border border-gray-300 max-w-96 p-16 rounded-2xl "
        >
          <label className="mb-3 text-gray-700">Movie Name </label>
          <input
            type="text"
            value={movies}
            onChange={(e)=>setMovies(e.target.value)}
            placeholder="Enter movie name"
            className=" placeholder:text-center py-2 px-16 border-2 border-gray-200 hover:outline-gray-300 focus: outline-gray-400 rounded-lg"
          />
          <label className="mb-3 text-gray-700 mt-3">Theatre name </label>
          <input
            type="text"
            value={theater}
            onChange={(e)=>setTheater(e.target.value)}
            placeholder="Enter the theater name "
            className=" placeholder:text-center py-2 px-16 border-2 border-gray-200 hover:outline-gray-300 focus: outline-gray-400 rounded-lg"
          />

          <label className="mb-3 text-gray-700 mt-3">Preview</label>

          <div className=" flex flex-col place-content-center">
            <img  className="w-40 items-center" src={poster ? URL.createObjectURL(poster) : null} alt="" />
            <label className="mb-3 text-gray-700 mt-3">
              Upload Movie Poster
            </label>
            <input type="file" name="Upload poster" onChange={(e)=>setPoster(e.target.files[0])}/>
            
            <div className="flex place-content-center">
              <button
                type="button"
                onClick={handleaddMovie}
                className="mt-10 bg-yellow-400 py-2 rounded-xl w-32 "
              >
                Add Movie
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addmovies;
