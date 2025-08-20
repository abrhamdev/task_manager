/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import Logout from "./logout";
import {ArrowRightOnRectangleIcon,UserIcon,DocumentCheckIcon,HomeIcon,XMarkIcon,BellAlertIcon} from '@heroicons/react/24/solid';

const SideBar=({isSidebarOpen,setIsSidebarOpen})=>{

    return(
        <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="w-64 bg-white shadow-lg fixed h-full z-50"
        >
        <div className="p-6 flex">
          <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>
          <XMarkIcon className="w-6 ml-auto hover:text-red-500 transition duration-100" onClick={()=>setIsSidebarOpen(false)}/>
        </div>
        <nav className="mt-6 h-full">
          <ul className="flex flex-col h-full">
            <li className="p-4 hover:bg-blue-50">
              <Link to="/dashboard/home" className="flex items-center text-gray-700">
                <HomeIcon className="h-6 text-blue-600 mr-2"/>
                Home
              </Link>
            </li>
            <li className="p-4 hover:bg-blue-50">
              <Link to="/dashboard/profile" className="flex items-center text-gray-700">
                <UserIcon className="h-6 text-blue-600 mr-2"/>
                Profile
              </Link>
            </li>
            <li className="p-4 hover:bg-blue-50">
              <Link to="/dashboard/tasks" className="flex items-center text-gray-700">
                <DocumentCheckIcon className="h-6 text-blue-600 mr-2"/>
                Tasks
              </Link>
            </li>
            <li className="p-4 block md:hidden hover:bg-blue-50">
              <Link to="" className="flex items-center text-gray-700">
              <BellAlertIcon className="h-6 text-blue-600 mr-2"/>
                Notification
              </Link>
            </li>
            <li className="p-4 cursor-pointer flex items-center hover:bg-blue-50" onClick={Logout}>
                <ArrowRightOnRectangleIcon className="h-7 w-7 mr-2 text-blue-600 "/>
                Logout
            </li>
          </ul>
        </nav>
      </motion.aside>
    );
}
export default SideBar;