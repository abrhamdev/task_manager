import SideBar from "../../components/dashboard/sidebar";
import Header from "../../components/dashboard/header";
import { motion } from "framer-motion";
import List from "../../components/dashboard/list";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Tasks=()=>{
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen flex bg-gray-100">
          
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Bars3Icon className="ml-6 fixed self-start mt-14 w-8 hover:text-red-400" onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}} />
          <motion.main
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex-1 ${isSidebarOpen ? "md:ml-64" : "ml-10"} p-6`}
          >
            <Header prop={`Tasks List`} />
            <List option="All"/>
            </motion.main>
        </div>
      );
}
export default Tasks;