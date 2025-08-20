import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../api.config";

const SignUp = () => {
    const [formData,setFormData]=useState({
      username:'',
      email:'',
      password:'',
      confirmpass:'',

    });
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');

    const handlechange=(e)=>{
      const {name,value}=e.target;
      setFormData({ ...formData, [name]:value });
    }

    const handlesubmit=async (e)=>{
          e.preventDefault();
          const {username,email,password,confirmpass}=formData;
          if(password !== confirmpass){
            setError("Password Do Not Match!");
            return;
          }
          try{
               const response=await axios.post(`${API_URL}/api/users/signup`,{username,email,password});
               setSuccess(response.data.message);
               setError('');
               setFormData({username:"",email:"",password:'',confirmpass:''});
          }catch(err){
            setError(err.response?.data?.message || err.response?.data?.errors || "something went wrong!");
            setSuccess("");
          }
    }
  
    return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Sign Up</h2>
        <form onSubmit={handlesubmit}>
           
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}
          
          <div className="mb-4">
            <label className="block mb-1" htmlFor="username">User Name</label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handlechange}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email-Address</label>
            <input
              id="email"
              type="text"
              value={formData.email}
              onChange={handlechange}
              name="email"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handlechange}
              name="password"
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="confirm">Confirm Password</label>
            <input
              id="confirm"
              type="password"
              name="confirmpass"
              value={formData.confirmpass}
              onChange={handlechange}
              className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-500 bg-gradient-to-b border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-400 active:bg-blue-500 focus:outline-none focus:ring disabled:opacity-25 transition"
            >
              Sign Up
            </button>
          </div>
          <hr className="mt-6"/>
          <div className="flex justify-center mt-2"> 
          <button id="google-login" className="bg-white border border-gray-300 shadow-md text-black px-4 py-2 rounded-md flex items-center">
               <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-2" />
               Continue with Google
              </button>
          </div>
          <div className="mt-6 text-center">
            <Link to="/login" className="underline">Sign In</Link>
          </div>
          <div className="mt-6 text-center">
            <Link to="/" className="underline">
              back to home
            </Link>
          </div>
        </form>
      </div>
      </div>
    );
  };
  
  export default SignUp;
  