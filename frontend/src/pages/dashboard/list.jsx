import SideBar from "../../components/dashboard/sidebar";
import Header from "../../components/dashboard/header";
import { motion } from "framer-motion";
import {useSearchParams } from "react-router-dom";
import List from "../../components/dashboard/list";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Display=()=>{
    const [searchParam]=useSearchParams();
    const option=searchParam.get("option");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen flex bg-gray-100">
          
          <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          <Bars3Icon className="ml-6 fixed self-start mt-14 w-8 hover:text-red-400" onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}} />
          <motion.main
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex-1 ${isSidebarOpen ? "md:ml-64" : "ml-10"} p-6`}>
           <Header prop={`${option} tasks`}/>
           <List option={option}/>
          </motion.main>
        </div>
      );
}
export default Display;