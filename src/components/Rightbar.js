import React from "react";
import profilepic from "../assets/profilepic.jpg";

function Rightbar() {
  return (
    <div className="flex-[3] bg-gray-100 dark:bg-grey-700 dark:text-white h-[calc(100vh-50px)] top-[50px] sticky overflow-y-scroll scrollbar-none">
   
        <div className="flex flex-col p-5 text-sm font-medium bg-white dark:bg-grey-800 m-5 shadow-lg">
          <span className="text-gray-500">Suggestions For You</span>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 ">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={profilepic}
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="flex gap-3  font-medium">
              <button className="px-2 py-1 bg-blue-500 rounded-md text-white">
                follow
              </button>
              <button className="px-2 py-1 bg-red-500 rounded-md text-white">
                dismiss
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 ">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={profilepic}
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <div className="flex gap-3  font-medium">
              <button className="px-2 py-1 bg-blue-500 rounded-md text-white">
                follow
              </button>
              <button className="px-2 py-1 bg-red-500 rounded-md text-white">
                dismiss
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 font-medium text-sm bg-white dark:bg-grey-800 m-5 shadow-lg">
          <span className="text-gray-500">Latest Activities</span>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2 ">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={profilepic}
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <p>
              changed their cover picture
              <span className="text-gray-500 ml-2">1 min ago</span>
            </p>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2 ">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={profilepic}
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <p>
              changed their cover picture
              <span className="text-gray-500 ml-2">1 min ago</span>
            </p>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2 ">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={profilepic}
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <p>
              changed their cover picture
              <span className="text-gray-500 ml-2">1 min ago</span>
            </p>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-2 ">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={profilepic}
                alt=""
              />
              <span>Jane Doe</span>
            </div>
            <p>
              changed their cover picture
              <span className="text-gray-500 ml-2">1 min ago</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-5 text-sm font-medium bg-white dark:bg-grey-800 m-5 shadow-lg">
          <span className="text-gray-500">Online Friends </span>

          <div className="flex gap-3 items-center cursor-pointer">
            <div className="relative">
              <img
                src={profilepic}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="h-3 w-3 bg-green-600 absolute left-8 bottom-6 rounded-full"></span>
            </div>
            <div>jane Doe </div>
          </div>
          <div className="flex gap-3 items-center cursor-pointer">
            <div className="relative">
              <img
                src={profilepic}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="h-3 w-3 bg-green-600 absolute left-8 bottom-6 rounded-full"></span>
            </div>
            <div>jane Doe </div>
          </div>
          <div className="flex gap-3 items-center cursor-pointer">
            <div className="relative">
              <img
                src={profilepic}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="h-3 w-3 bg-green-600 absolute left-8 bottom-6 rounded-full"></span>
            </div>
            <div>jane Doe </div>
          </div>
        </div>
      </div>
  
  );
}

export default Rightbar;
