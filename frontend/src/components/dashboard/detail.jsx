/* eslint-disable react/prop-types */
import {
  ExclamationCircleIcon,
  ClockIcon,
  UserIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { API_URL } from "../../../api.config";
import { useToast } from "../contextapi/toster/toastContext";

const TaskDetail = ({ task }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [modifiedForm, setModifideForm] = useState({});
  const [error, setError] = useState("");
  const { addToast } = useToast();
  const [formData,setFormData]=useState({
      title:'',
      description: '',
      status:'',
      priority:'',
      category:'',
      dueDate:'',
      assignedTo:'',
  })

  const handleedit = () => {
    setOpenEdit(!openEdit);
  };

  const handleChange = (e) => {

    const { name, value } = e.target;
    console.log(modifiedForm);
    setFormData({ ...formData, [name]: value });
    setModifideForm({ ...modifiedForm, [name]: value });
    
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/api/tasks/updatetask?id=${task.id}`,
        { modifiedForm }
      );
      setOpenEdit(false);
      addToast(response.data.message);
    } catch (err) {
      setOpenEdit(true);
      setError(err.response?.data?.message || err);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600 text-green-400";
      case "In Progress":
        return "text-blue-600 text-blue-400";
      case "Pending":
        return "text-yellow-600 text-yellow-400";
      case "overdue":
        return "text-red-600 text-red-400";
      default:
        return "text-gray-600 text-gray-400";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600 text-red-400";
      case "Medium":
        return "text-yellow-600 text-yellow-400";
      case "Low":
        return "text-green-600 text-green-100";
      case "Urgent":
        return "text-green-600 text-red-600";
      default:
        return "text-gray-600 text-gray-100";
    }
  };

  return (
    <div  className="max-w-4xl h-fit p-6 mt-10 mx-auto bg-white rounded-lg shadow-md space-y-6">
      <div className="grid grid-rows-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
          <div
            className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
              task.status
            )}`}
          >
            <strong>{task.status}</strong>
          </div>
        </div>

        <p className="text-gray-600">{task.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-5 h-5 text-gray-500" />
              <p className="text-gray-600">
                Due Date:{" "}
                <span className="font-semibold text-gray-800">
                  {task.due_date}
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <ClockIcon className="w-5 h-5 text-gray-500" />
              <p className="text-gray-600">
                Created At:{" "}
                <span className="font-semibold text-gray-800">
                  {task.created_at}
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <ClockIcon className="w-5 h-5 text-gray-500" />
              <p className="text-gray-600">
                Updated At:{" "}
                <span className="font-semibold text-gray-800">
                  {task.updated_at}
                </span>
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <ExclamationCircleIcon className="w-5 h-5 text-gray-500" />
              <p className="text-gray-600">
                Priority:{" "}
                <span
                  className={`font-semibold px-2 py-1 rounded ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <UserIcon className="w-5 h-5 text-gray-500" />
              <p className="text-gray-600">
                Assigned To:{" "}
                <span className="font-semibold text-gray-800">
                  {task.assigned_to}
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <UserIcon className="w-5 h-5 text-gray-500" />
              <p className="text-gray-600">
                User ID:{" "}
                <span className="font-semibold text-gray-800">
                  {task.user_id}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full">
          <p className="text-gray-600">
            Category:{" "}
            <span className="font-semibold text-gray-800">{task.category}</span>
          </p>
          <PencilIcon
            className="w-5 h-5 ml-auto cursor-pointer"
            onClick={() => handleedit(task.id)}
          />
        </div>

        {openEdit && (
          <div className="flex">
            <motion.main
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex-1  p-6`}
            >
              <div className="h-auto w-full mt-6 bg-gray-200 shadow-md rounded-md p-6">
                <h2 className="text-2xl w-full text-center font-bold text-gray-700 mb-4">
                  Edit Task
                </h2>
                {error && (
                  <p className="text-red-500 mb-4 w-full text-center p-2">
                    {error}
                  </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 ">
                  <div className="space-y-4  grid gap-x-6 grid-cols-1 md:grid-cols-2">
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
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </motion.main>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskDetail;
