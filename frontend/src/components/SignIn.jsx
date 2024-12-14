
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
      if (!Email || !Password) {
        return toast.error("Please fill up all the details!", {
          position: 'top-right',
        });
      }
      const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!emailReg.test(Email)) {
        return toast.error('Please enter a valid email address.', {
          position: 'top-right',
        });
      }

      if(Password.length!=6){
        return toast.error("Please enter 6 digit password", {
          position: 'top-right',
        });
      }
      try{
        console.log("login attempted",Email,Password)
        
        setEmail("");
        setPassword("");
        return toast.success("Login Success", {
        position: 'top-right',
      }
      )
      }
      catch(e){
        toast.error(e, {
          position: 'top-right',
        });
        console.log(e);
      }
  };

  return (
    <div className="flex bg-gray-100 h-screen justify-center items-center font-inter">
      <form
        className="flex flex-col gap-9  text-black p-14 rounded-xl border border-gray-300 "
        onSubmit={login}
      >
        <h2 className="font-bold text-center text-xl md:text-3xl">
          LOGIN
        </h2>
        <div className="flex items-center justify-between gap-10">
          <label className="font-semibold text-lg md:text-xl ">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="px-4 py-2 rounded-xl transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none border border-gray-300"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between gap-6">
          <label className="font-semibold text-lg md:text-xl ">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter 6 digit password"
            className="px-4 py-2 rounded-xl transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none border border-gray-300"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="py-3 mt-4 btn font-semibold text-xl  rounded-xl w-[200px] bg-gray-200
            transition-transform transform hover:scale-105 focus:scale-105 focus:outline-1 border border-gray-300"
          >
            Future You
          </button>
          
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default  SignIn; 
