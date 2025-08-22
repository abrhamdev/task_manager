/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import heroimage from "../../assets/images/hero.png";
import { API_URL } from "../../../api.config";
import { userDataContext } from "../contextapi/userdata/userdata";
import { Link, useLocation } from "react-router-dom";
import LoadingAnimation from "../services/loading";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Header = ({ prop }) => {
  const [searchData, setSearchData] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [resultBox, setResultBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { userData } = useContext(userDataContext);
  const userid = userData.userid;
  const [fetchedUserData,setFetchedUserData]=useState({
    username:"",
    email:"",
    image:"",
  });

  const search = async (e) => {
    const { value } = e.target;
    setSearchData(value);
  };

  useEffect(() => {
    setSearchData("");
  }, [location]);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/tasks/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchData, userid }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data.result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, [searchData, userid]);

  useEffect(() => {
    fetch(`${API_URL}/api/users/profile`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid }),
    })
      .then((response) => response.json())
      .then((data) => setFetchedUserData({ email: data.email,username:data.username,image:data.image }))
      .catch((err) => {
        console.log("Error "+err.response?.data?.message);
      });
  }, [userid]);

  useEffect(() => {
    if (searchData !== "") setResultBox(true);
    else setResultBox(false);
  }, [searchData]);

  return (
    <>
      <header className="flex justify-between items-center bg-white py-1 shadow-sm rounded-lg">
        <h1 className="text-xl ml-2 font-bold text-gray-800">{prop}</h1>
        <div className="items-center hidden md:flex">
          <input
            type="text"
            value={searchData}
            onChange={search}
            placeholder="Search..."
            className="border p-2 rounded-lg text-sm mr-4"
          />
          <div className=" items-center hidden md:flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Notifications
            </button>
            <div className="relative w-12 h-12">
              {fetchedUserData.image ? (
                <>
                  <img
                    src={heroimage} // Replace with actual profile image URL
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border-2 border-blue-600 object-cover"
                  />
                  <span className="absolute bottom-0 right-0 bg-green-500 border-2 border-white w-3 h-3 rounded-full"></span>
                </>
              ) : (
                <UserCircleIcon className="text-gray-400 " />
              )}
            </div>
          </div>
        </div>
      </header>
      {resultBox && (
        <div className="w-full absolute border-2 shadow-lg h-fit z-20 bg-white">
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <h1>
                <LoadingAnimation width={8} height={8} />
              </h1>
            </div>
          ) : searchResult.length == 0 ? (
            <div className="w-full text-center p-4">
              <h1>No Result Found</h1>
            </div>
          ) : (
            <ul>
              {searchResult.map((result) => {
                return (
                  <Link
                    key={result.id}
                    to={`/dashboard/tasks/list/detail?taskid=${result.id}`}
                  >
                    <li className="w-full p-2 border-b cursor-pointer hover:bg-gray-100">
                      {result.title}
                    </li>
                  </Link>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
};
export default Header;
