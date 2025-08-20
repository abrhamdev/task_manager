import { useState,useContext } from "react";
import SideBar from "../../components/dashboard/sidebar";
import { motion } from "framer-motion";
import Header from "../../components/dashboard/header";
import { userDataContext } from "../../components/contextapi/userdata/userdata";
import axios from "axios";
import { useToast } from "../../components/contextapi/toster/toastContext";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { API_URL } from "../../../api.config";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
 const {userData}=useContext(userDataContext);
  const userId=userData.userid;
  const { addToast } = useToast();
  const [error,setError]=useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    category: "",
    dueDate: "",
    assignedTo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {title,description,status,priority,category,dueDate}=formData;
    try{
    const response=await axios.post(`${API_URL}/api/tasks/createtask`,{userId,title,description,status,priority,category,dueDate});
      addToast(response.data.message);
      setError("");
      setFormData({
        title: "",
        description: "",
        status: "Pending",
        priority: "Medium",
        category: "",
        dueDate: "",
        assignedTo: "",})
     navigate("/dashboard/tasks");
    }catch(err){
      setError(err.response?.data?.message || "something went wrong!");
    }
  };

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
        <Header prop={`Task Form`} />
          <div className="h-auto w-full mt-6 bg-white shadow-md rounded-md p-6">
            <h2 className="text-2xl w-full text-center font-bold text-gray-700 mb-4">
              Create a New Task
            </h2>
            {error && <p className="text-red-500 mb-4 w-full text-center p-2">{error}</p>}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 "
            >
            <div className="space-y-4  grid gap-x-6 grid-cols-1 md:grid-cols-2">
              
              <div>
                <label className="block text-gray-600 font-medium">
                  Your Id: {userId}
                </label>
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Task Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter task title"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter task description"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter task category"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Due Date
                </label>
                <input
                  type="datetime-local"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Assigned To (Optional)
                </label>
                <input
                  type="text"
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter username to assign the task"
                />
              </div>
             </div>
              <div className="w-full flex justify-center p-10">
                <button
                  type="submit"
                  className="w-2/4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
      </motion.main>
    </div>
  );
};

export default TaskForm;
