import React from "react";
import postimg from "../../images/Post.jpg";

function Post() {
  return (
    <div>
      <div className="flex font-mono pl-32 bg-gradient-to-r from-stone-950"> 
        <div className="bg-slate-950  items-center m-4 rounded-2xl">
          <div class=" place-content-center  bg-slate-900 border-gray-200 rounded-lg p-2 dark:bg-gray-800 dark:border-gray-700">
            <div>
              <img
                src={postimg}
                alt=""
                className="  max-w-40 flex flex-col items-center"
              />
            </div>
            <button
              type="button"
              class="font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center bg-yellow-500 hover:bg-yellow-400 outline outline-offset-2 hover:outline-yellow-400 "
            >
              Booknow
            </button>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Post;
