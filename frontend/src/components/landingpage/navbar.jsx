import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () =>{

  const [isscrolled,setscroll]= useState(false);
  useEffect(()=>{
   
    const handleScroll=()=>{
      if(window.scrollY>0){
       setscroll(true);
      }else{
       setscroll(false);
      }
    };

    window.addEventListener("scroll",handleScroll);
   
  },[])

    return (
    <header className={`sm:h-16 flex items-center z-30 w-full fixed ${isscrolled?"bg-gradient-to-r from-blue-900 via-blue-950 to-black shadow-lg transition duration-300":"bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className={`uppercase font-black text-3xl lg:block hidden text-white`}>
          Task Manager
        </div>
        <div className="flex items-center">
          <nav className={`font-sen text-white uppercase flex items-center `}>
            <Link to="#" className={`py-2 px-6 flex ${isscrolled? "hover:text-pink-400 transition duration-300":"hover:text-pink-600 transition duration-300"}`}>
              Home
            </Link>
            <Link to="/login" className={`py-2 px-6 flex ${isscrolled? "hover:text-pink-400 transition duration-300":"hover:text-pink-600 transition duration-300"}`}>
              Login
            </Link>
            <Link to="/signup" className={`py-2 px-6 flex ${isscrolled? "hover:text-pink-400 transition duration-300":"hover:text-pink-600 transition duration-300"}`}>
              Sign-up
            </Link>
          </nav>
          
        </div>
      </div>
    </header>
  )};

  export default Navbar;