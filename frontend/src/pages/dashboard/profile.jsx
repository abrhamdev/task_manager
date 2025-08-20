import Header from "../../components/dashboard/header";
import SideBar from "../../components/dashboard/sidebar";
import { motion } from "framer-motion";
import { UserCircleIcon,Bars3Icon } from "@heroicons/react/24/solid";
import { userDataContext } from "../../components/contextapi/userdata/userdata";
import { useContext, useEffect, useState } from "react";
import { API_URL } from "../../../api.config";

const Profile = () => {
  const { userData } = useContext(userDataContext);
  const username = userData.username,
    userid = userData.userid;
  const [error, setError] = useState("");
  const [fetchedUserData, setFetchedUserData] = useState({
    email: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/users/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid }),
    })
      .then((response) => response.json())
      .then((data) => setFetchedUserData({ email: data.email }))
      .catch((err) => {
        setError("something went Wrong" + err);
      });
  }, [userid]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Bars3Icon className="ml-6 fixed self-start mt-14 w-8 hover:text-red-400" onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}} />
      <motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className={`flex-1 ${isSidebarOpen ? "md:ml-64" : "ml-10"} p-6`}
>
  <Header prop={"Profile"} />
  <div className="w-full h-full p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
    {error && (
      <p className="text-red-500 mb-4 w-full text-center p-2 col-span-full">
        {error}
      </p>
    )}

    {/* Profile Card */}
    <div className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center">
      <UserCircleIcon className="w-24 h-24 md:w-36 md:h-36 text-gray-400" />
      <h2 className="text-xl md:text-2xl font-bold mt-4">{username}</h2>
      <p className="text-gray-500 text-sm md:text-base mt-2">
        {fetchedUserData.email}
      </p>
    </div>

    {/* About Section */}
    <div className="bg-white shadow-lg rounded-3xl p-6 md:col-span-2">
      <h2 className="text-lg md:text-xl font-bold border-b pb-2 mb-4">
        About Me
      </h2>
      <p className="text-gray-600 text-sm md:text-base">
      </p>
    </div>

    {/* Activity Section */}
    <div className="bg-white shadow-lg rounded-3xl p-6 col-span-full">
      <h2 className="text-lg md:text-xl font-bold border-b pb-2 mb-4">
        Recent Activity
      </h2>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
          <p className="text-gray-700">Activity 1: </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
          <p className="text-gray-700">Activity 2: </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
          <p className="text-gray-700">Activity 3: </p>
        </div>
      </div>
    </div>
  </div>
</motion.main>

    </div>
  );
};
export default Profile;
