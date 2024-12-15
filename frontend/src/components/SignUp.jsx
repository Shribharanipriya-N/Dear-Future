import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (e) => {
    e.preventDefault();

    try {
      if (!name || !email || !password) {
        return toast.error('Please fill up all the details..!', {
          position: 'top-right',
        });
      }

      const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!emailReg.test(email)) {
        return toast.error('Please enter a valid email address.', {
          position: 'top-right',
        });
      }

      if (password.length !== 6) {
        return toast.error('Password must be exactly 6 characters long.', {
          position: 'top-right',
        });
      }
      const res = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password,
      });
      console.log("signup res",res);
      
      console.log('Signup successful:', name, email, password);
      toast.success('Signup successful!', {
        position: 'top-right',
      });

      setName('');
      setEmail('');
      setPassword('');
    } catch(e){
      toast.error(e.response.data.message, {
        position: 'top-right',
      });
      console.log(e);
    }
  };

  return (
    <div className="flex bg-gray-100 h-screen justify-center items-center font-inter">
      <form
        className="flex flex-col gap-9  text-black p-10 rounded-xl border border-gray-300 "
        onSubmit={signup}
      >
        <h2 className="font-bold text-center text-xl md:text-3xl">
          SIGNUP
        </h2>
        <div className="flex items-center justify-between gap-6">
          <label className="font-semibold text-lg md:text-xl ">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter name"
            className="px-4 py-2 rounded-xl transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none border border-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between gap-10">
          <label className="font-semibold text-lg md:text-xl ">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="px-4 py-2 rounded-xl transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none border border-gray-300"
            value={email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="py-3 mt-4 btn font-semibold text-xl  rounded-xl w-[200px] bg-gray-200
            transition-transform transform hover:scale-105 focus:scale-105 focus:outline-1 border border-gray-300"
          >
            Join Dear Future
          </button>
          
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUp;
