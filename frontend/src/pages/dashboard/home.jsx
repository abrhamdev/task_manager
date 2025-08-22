import { motion } from "framer-motion";
import SideBar from "../../components/dashboard/sidebar";
import Header from "../../components/dashboard/header";
import AllTask from "../../components/dashboard/alltask";
import TaskStat from "../../components/dashboard/taskstat";
import Priority from "../../components/dashboard/taskprior";
import { useContext, useState } from "react";
import { userDataContext } from "../../components/contextapi/userdata/userdata";
import { Bars3Icon, ChartBarIcon, ClockIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const { userData } = useContext(userDataContext);
  const username = userData.username;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Bars3Icon className="ml-6 absolute self-start mt-4 w-6 cursor-pointer hover:text-red-400 z-20" onClick={() => { setIsSidebarOpen(!isSidebarOpen) }} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`flex-1 ${isSidebarOpen ? "md:ml-64" : "ml-0"} transition-all duration-300`}
      >
        {/* Header Section */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header prop={`Welcome Back, ${username}!`} />
          </div>
        </div>
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Stats Overview Cards */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center">
                <CheckCircleIcon className="w-8 h-8 mr-4" />
                <div>
                  <p className="text-sm font-medium">Completed Tasks</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center">
                <ClockIcon className="w-8 h-8 mr-4" />
                <div>
                  <p className="text-sm font-medium">Pending Tasks</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center">
                <ChartBarIcon className="w-8 h-8 mr-4" />
                <div>
                  <p className="text-sm font-medium">Productivity Score</p>
                  <p className="text-2xl font-bold">78%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* All Tasks Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <AllTask />
              </motion.div>

              {/* Task Status Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <TaskStat />
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Priority Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <Priority />
              </motion.div>

              {/* Recent Activity Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    <p className="text-sm text-gray-700">No Avtivity Yet</p>
                </div>
              </motion.div>

              {/* Quick Actions Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                    New Task
                  </button>
                  <button className="bg-green-100 hover:bg-green-200 text-green-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                    Add Team
                  </button>
                  <button className="bg-purple-100 hover:bg-purple-200 text-purple-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                    Generate Report
                  </button>
                  <button className="bg-orange-100 hover:bg-orange-200 text-orange-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors">
                    Settings
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Dashboard;