import { motion } from "framer-motion";
import { Outlet,Link } from "react-router-dom";
import { useContext,useState,useEffect } from "react";
import { userDataContext } from "../contextapi/userdata/userdata";
import { API_URL } from "../../../api.config";
import lowimage from  "../../assets/images/low.png";
import highimage from  "../../assets/images/high.png";
import mediumimage from  "../../assets/images/medium.png";
import urgentimage from  "../../assets/images/urgent.png";
import LoadingAnimation from "../services/loading";

const Priority=()=>{
   const [low,setLow]=useState();
   const [medium,setMedium]=useState();
   const [high,setHigh]=useState();
   const [urgent,setUrgent]=useState();
   const {userData}=useContext(userDataContext);
   const userid=userData.userid;
   const [loading,setLoading]=useState(false);
     
      useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/api/tasks/list`,{
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({userid,option:"Low"}),
        })
          .then((response) => response.json())
          .then((data) => {setLow(data.length);setLoading(false)})
          .catch((error) => console.error("Error fetching tasks:", error));
      }, [userid]);

      useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/api/tasks/list`,{
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({userid,option:"Medium"}),
        })
          .then((response) => response.json())
          .then((data) => {setMedium(data.length);setLoading(false)})
          .catch((error) => console.error("Error fetching tasks:", error));
      }, [userid]);
   
      useEffect(() => {
        fetch(`${API_URL}/api/tasks/list`,{
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({userid,option:"High"}),
        })
          .then((response) => response.json())
          .then((data) => setHigh(data.length))
          .catch((error) => console.error("Error fetching tasks:", error));
      }, [userid]);

      useEffect(() => {
        fetch(`${API_URL}/api/tasks/list`,{
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({userid,option:"Urgent"}),
        })
          .then((response) => response.json())
          .then((data) => setUrgent(data.length))
          .catch((error) => console.error("Error fetching tasks:", error));
      }, [userid]);

  return(
    <>
      <div className="mt-8">
        <h1 className="text-2xl font-bold ">Based On Priority</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
          <Link to="/dashboard/tasks/list?option=Low">
             <motion.div
               whileHover={{ scale: 1.05 }}
               className="rounded-lg border shadow-md overflow-hidden"
             >
               <h2 className="text-lg font-bold p-2 text-gray-700">Low</h2>
               <img className="object-cover" src={lowimage} alt="" />
               {loading ? <LoadingAnimation width={4} height={4} /> :<p className="text-2xl font-bold p-2 text-blue-600">{low}</p>}             </motion.div>
          </Link>
          <Link to="/dashboard/tasks/list?option=Medium">
             <motion.div
               whileHover={{ scale: 1.05 }}
               className="border rounded-lg shadow-md"
             >
               <h2 className="text-lg p-2 font-bold text-gray-700">Medium</h2>
               <img src={mediumimage} className="w-full h-full object-cover" alt="" />
               {loading ? <LoadingAnimation width={4} height={4} /> :<p className="text-2xl p-2 font-bold text-blue-600">{medium}</p>}
             </motion.div>
          </Link>
          <Link to="/dashboard/tasks/list?option=High">
             <motion.div
               whileHover={{ scale: 1.05 }}
               className="border rounded-lg shadow-md"
             >
               <h2 className="text-lg font-bold p-2 text-gray-700">High</h2>
               <img src={highimage} className="w-full h-full object-cover" alt="" />
               <p className="text-2xl font-bold p-2 text-blue-600">{high}</p>
             </motion.div>
          </Link>
          <Link to="/dashboard/tasks/list?option=Urgent">
             <motion.div
               whileHover={{ scale: 1.05 }}
               className=" rounded-lg shadow-md"
             >
               <h2 className="text-lg p-2 font-bold text-gray-700">Urgent</h2>
               <img src={urgentimage} className="w-full h-full object-cover" alt="" />
               <p className="text-2xl p-2 font-bold text-blue-600">{urgent}</p>
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
export default Priority;