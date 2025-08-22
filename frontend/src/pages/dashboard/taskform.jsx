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
        assignedTo: "",
      })
      navigate("/dashboard/tasks");
    } catch (err) {
      setError(err.response?.data?.message || "something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Bars3Icon className="ml-6 absolute self-start mt-6 w-6 hover:text-red-400 z-20" onClick={() => { setIsSidebarOpen(!isSidebarOpen) }} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`flex-1 ${isSidebarOpen ? "md:ml-64" : "ml-0"} transition-all duration-300`}
      >
        {/* Header Section */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header prop={`Task Form`} />
          </div>
        </div>

        {/* Centered Form Container */}
        <div className="flex justify-center items-start pt-6 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl">
            <div className="bg-white shadow-md rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                Create a New Task
              </h2>
              
              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-center">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User ID Display */}
                <div className="bg-blue-50 p-3 rounded-lg">
                  <label className="block text-blue-700 font-medium">
                    Your User ID: 
                    <span className="ml-2 font-semibold">{userId}</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Task Title */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Task Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter task title"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter task description"
                      rows="4"
                      required
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>

                  {/* Priority */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Priority *
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Urgent">Urgent</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter task category"
                    />
                  </div>

                  {/* Due Date */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Due Date *
                    </label>
                    <input
                      type="datetime-local"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Assigned To */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Assigned To (Optional)
                    </label>
                    <input
                      type="text"
                      name="assignedTo"
                      value={formData.assignedTo}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter username to assign the task"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Create Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default TaskForm;