import React from 'react'
// import { Outlet } from 'react-router-dom';
import Home from '../components/Home';
import NavBar from './NavBar';
import AddLetter from './AddLetter';

const LayOut = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gray-100 gap-10  '>
      <div className='sticky top-2 z-50 flex justify-center'>
       <NavBar/>
       </div>
      <div className='z-10 flex flex-grow justify-center '>
        {/* <Home/> */}
        <AddLetter/>
      </div>
    </div>
  )
}

export default LayOut
