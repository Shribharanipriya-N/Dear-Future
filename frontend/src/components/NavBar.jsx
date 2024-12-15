import React from "react";
// import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-4/5 h-[75px] flex font-inter items-center justify-center bg-gray-200  border border-gray-300 shadow-4 rounded-lg ">
      <div className=" w-1/4 h-full "></div>
      <div className="w-1/4 h-full flex items-center  justify-end  text-3xl text-gray-800 font-bold font-inter  ">
        Dear Future
      </div>
      <div className="w-2/4 h-full flex items-center justify-end mr-6 gap-5">
      {/* <Link to="/upload"> */}
        <button className="text-gray-700 font-semibold text-md  rounded hover:scale-105 hover:bg-gray-300 p-1 hover:border hover:rounded-lg hover:border-gray-400">
          Write Future📝
        </button>
        {/* </Link> */}
        {/* <Link to="/letters"> */}
        <button className="text-gray-700 font-semibold text-md  rounded p-1 hover:scale-105 hover:bg-gray-300 hover:border hover:rounded-lg hover:border-gray-400">
          Future Me📅
        </button>
        {/* </Link> */}
        <button className="text-gray-700 font-semibold text-md  rounded hover:scale-105 hover:bg-gray-300 p-1 hover:border hover:rounded-lg hover:border-gray-400">
          My Writes📝
        </button>
        <FaUserCircle  size={25} className="transition-transform transform hover:scale-125 focus:scale-105 focus:outline-none "/>
      </div>
    </div>
  );
};

export default NavBar;
