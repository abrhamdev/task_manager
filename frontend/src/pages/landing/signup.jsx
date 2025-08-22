import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../api.config";
import { motion } from "framer-motion";
import LoadingAnimation from "../../components/services/loading";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpass: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear error when user starts typing
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmpass } = formData;
    
    if (password !== confirmpass) {
      setError("Passwords do not match!");
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/users/signup`, { username, email, password });
      setSuccess(response.data.message);
      setError('');
      setFormData({ username: "", email: "", password: '', confirmpass: '' });
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.errors || "Something went wrong!");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-full flex">
      {/* Background with gradient and effects matching landing page */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black opacity-95 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse-slower"></div>
      
      {/* Left side - decorative content */}
      <div className="hidden lg:flex lg:w-1/2 relative z-10 items-center justify-center p-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-md text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Task Manager</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Create your account and start organizing your tasks, collaborating with your team, and boosting your productivity.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <span className="text-gray-300">Organize tasks with intuitive tools</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <span className="text-gray-300">Collaborate with your team in real-time</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <span className="text-gray-300">Enterprise-grade security and privacy</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Right side - sign up form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-md bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="text-gray-400 mt-2">Get started with your free account</p>
          </div>
          
          <form onSubmit={handlesubmit}>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}
            
            {success && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
              >
                {success}
              </motion.div>
            )}
            
            <div className="mb-5">
              <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handlechange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div className="mb-5">
              <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handlechange}
                name="email"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="mb-5">
              <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handlechange}
                name="password"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                placeholder="Create a password"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="confirm">
                Confirm Password
              </label>
              <input
                id="confirm"
                type="password"
                name="confirmpass"
                value={formData.confirmpass}
                onChange={handlechange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                placeholder="Confirm your password"
                required
              />
            </div>
            
            {loading ? (
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  <LoadingAnimation width={5} height={5} />
                  Creating account...
                </button>
              </div>
            ) : (
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                >
                  Create Account
                </button>
              </div>
            )}
            
            <div className="relative flex items-center justify-center mb-6">
              <div className="border-t border-gray-600/50 w-full"></div>
              <span className="px-3 text-sm text-gray-400 bg-transparent">Or continue with</span>
              <div className="border-t border-gray-600/50 w-full"></div>
            </div>
            
            <div className="mb-6">
              <button
                id="google-login"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-gray-600 font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all text-sm"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Sign in
              </Link>
            </div>
            
            <div className="text-center mt-4">
              <Link to="/" className="text-sm text-gray-400 hover:text-gray-300 transition-colors inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to home
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;