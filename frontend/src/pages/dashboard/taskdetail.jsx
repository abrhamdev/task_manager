import SideBar from "../../components/dashboard/sidebar";
import Header from "../../components/dashboard/header";
import { motion } from "framer-motion";
import {useSearchParams } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import TaskDetail from "../../components/dashboard/detail";
import { API_URL } from "../../../api.config";

const Detail=()=>{
    const [searchParam]=useSearchParams();
    const taskid=searchParam.get("taskid");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [task,setTask]=useState([]);

    useEffect(()=>{
       fetch(`${API_URL}/api/tasks/gettask`,{
        method: "POST", 
       headers: {
         "Content-Type": "application/json", 
       },
        body: JSON.stringify({taskid}),}).then((response) => response.json()).then((data)=>{setTask(data.task);}).catch((error) => console.error("Error fetching tasks:", error));
    },[taskid]);

    return (
        <div className="min-h-screen flex bg-gray-100">
          <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          <Bars3Icon className="ml-6 fixed self-start mt-14 w-8 hover:text-red-400" onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}} />
          <motion.main
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`flex-1 ${isSidebarOpen ? "md:ml-64" : "ml-10"} p-6`}>
           <Header prop={`Id ${taskid} Task Detail`}/>
           <TaskDetail task={task}/>
          </motion.main>
        </div>
      );
}
export default Detail;