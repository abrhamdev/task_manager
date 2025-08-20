import { motion } from "framer-motion";
import SideBar from "../../components/dashboard/sidebar";
import Header from "../../components/dashboard/header";
import AllTask from "../../components/dashboard/alltask";
import TaskStat from "../../components/dashboard/taskstat";
import Priority from "../../components/dashboard/taskprior";
import { useContext,useState } from "react";
import { userDataContext } from "../../components/contextapi/userdata/userdata";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const {userData}=useContext(userDataContext);
  const username=userData.username;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex-nowrap flex bg-gray-100">
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Bars3Icon className="ml-6 fixed self-start mt-14 w-8 hover:text-red-400" onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}} />
      <motion.main
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`flex-1 ${isSidebarOpen ? "md:ml-64 ml-8" : "ml-8"} p-6`}>
        <Header prop={`Welcome Back! ${username}`} />
        <AllTask/>
        <TaskStat/>
        <Priority/>
      </motion.main>
    </div>
  );
};

export default Dashboard;
