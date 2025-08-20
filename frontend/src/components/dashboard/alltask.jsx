import { motion } from "framer-motion";
import { Outlet,Link } from "react-router-dom";
import { useContext, useEffect,useState } from "react";
import { userDataContext } from "../contextapi/userdata/userdata";
import { API_URL } from "../../../api.config";
import all from "../../assets/images/All.png"

const AllTask=()=>{

  const [allTasks,setAllTasks]=useState([]);
  const {userData}=useContext(userDataContext);
  const userid=userData.userid;

   useEffect(() => {
     fetch(`${API_URL}/api/tasks/list`,{
       method: "POST", 
       headers: {
         "Content-Type": "application/json", 
       },
       body: JSON.stringify({userid,option:"All"}),
     })
       .then((response) => response.json())
       .then((data) => setAllTasks(data.length))
       .catch((error) => console.error("Error fetching tasks:", error));
   }, [userid]);

  return(
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold ">All Tasks</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          <Link to="/dashboard/tasks/list?option=All">
             <motion.div
               whileHover={{ scale: 1.05 }}
               className=" rounded-lg shadow-md"
              >
               <h2 className="text-lg p-2 font-bold text-gray-700">All</h2>
               <img src={all} className="w-full h-full object-cover" alt="" />
               <p className="text-2xl p-2 font-bold text-blue-600">{allTasks}</p>
             </motion.div>
           </Link>
        </div>

        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default AllTask;