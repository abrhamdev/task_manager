import { motion } from "framer-motion";
import { Outlet,Link } from "react-router-dom";
import { userDataContext } from "../contextapi/userdata/userdata";
import { useContext,useEffect,useState } from "react";
import { API_URL } from "../../../api.config";
import pendingimage from "../../assets/images/pending.png"
import inprogressimage from "../../assets/images/inprogress.png"
import completedimage from "../../assets/images/completed.png"

const TaskStat = () => {
   const [pending,setPending]=useState();
   const [completed,setCompleted]=useState();
   const [inProgress,setInProgress]=useState();

  const {userData}=useContext(userDataContext);
  const userid=userData.userid;
  useEffect(() => {
          fetch(`${API_URL}/api/tasks/list`,{
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({userid,option:"Pending"}),
          })
            .then((response) => response.json())
            .then((data) => setPending(data.length))
            .catch((error) => console.error("Error fetching tasks:", error));
        }, [userid]);

        useEffect(() => {
          fetch(`${API_URL}/api/tasks/list`,{
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({userid,option:"completed"}),
          })
            .then((response) => response.json())
            .then((data) => setCompleted(data.length))
            .catch((error) => console.error("Error fetching tasks:", error));
        }, [userid]);

        useEffect(() => {
          fetch(`${API_URL}/api/tasks/list`,{
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({userid,option:"inProgress"}),
          })
            .then((response) => response.json())
            .then((data) => setInProgress(data.length))
            .catch((error) => console.error("Error fetching tasks:", error));
        }, [userid]);

  return (
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold ">Based on Status</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
        <Link to="/dashboard/tasks/list?option=Pending">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-lg shadow-md"
          >
            <h2 className="text-lg p-2 font-bold text-gray-700">Pending Tasks</h2>
            <img src={pendingimage} className="w-full h-full object-cover" alt="" />
            <p className="text-2xl p-2 font-bold text-blue-600">{pending}</p>
          </motion.div>
        </Link>  
        <Link to="/dashboard/tasks/list?option=completed">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className=" rounded-lg shadow-md"
            >
              <h2 className="text-lg p-2 font-bold text-gray-700">Completed Tasks</h2>
              <img src={completedimage} className="w-full h-full object-cover" alt="" />
              <p className="text-2xl p-2 font-bold text-green-600">{completed}</p>
            </motion.div>
         </Link>
         <Link to="/dashboard/tasks/list?option=inProgress">
             <motion.div
               whileHover={{ scale: 1.05 }}
               className=" rounded-lg shadow-md"
             >
               <h2 className="text-lg p-2 font-bold text-gray-700">In Progress</h2>
               <img src={inprogressimage} className="w-full h-full object-cover" alt="" />
               <p className="text-2xl p-2 font-bold text-yellow-600">{inProgress}</p>
             </motion.div>
          </Link>
        </div>

        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default TaskStat;
