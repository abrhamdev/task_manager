/* eslint-disable react/prop-types */
import { Link,useLocation } from "react-router-dom";
import { ArrowRightIcon, PlusIcon, MinusCircleIcon,TrashIcon } from "@heroicons/react/24/solid";
import { useState, useContext, useEffect } from "react";
import { userDataContext } from "../contextapi/userdata/userdata";
import { useToast } from "../contextapi/toster/toastContext";
import axios from "axios";
import { API_URL } from "../../../api.config";
import LoadingAnimation from "../services/loading";

const List = ({ option }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); 
  const { userData } = useContext(userDataContext);
  const userid = userData.userid;
  const { addToast } = useToast();
  const [rerender,setRerender]=useState(false);
  const [checkedList, setCheckedList] = useState([]);
  const location=useLocation();
  

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/tasks/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userid, option }),
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.tasks);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false); 
      });
      setRerender(false);
  }, [option, userid,rerender,location]);

  const Delete = async (id) => {
    try {
      
      const response = await axios.post(`${API_URL}/api/tasks/delete`, { id });
      addToast(response.data.message);
      setRerender(true);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTasks=async()=>{
    try {
      const response = await axios.post(`${API_URL}/api/tasks/delete_tasks`, {checkedList});
      addToast(response.data.message);
      setRerender(true);
      setCheckedList("");
    } catch (err) {
      console.log(err);
    }
  }

  const handleCheckList = (e) => {
    const { checked, value } = e.target;
    const id = parseInt(value, 10); // Convert value to number
    setCheckedList((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  return (
    <div>
      { checkedList?.length !==0 && <TrashIcon className="w-6 float-end text-black hover:text-red-500" onClick={deleteTasks}/>}
      {tasks.length !== 0 && (
        <Link to="/dashboard/taskform">
          <div className="flex cursor-pointer float-end hover:text-blue-500">
            <strong>Add</strong>
            <PlusIcon className="w-6" />
          </div>
        </Link>
      )}
      <div className="pt-4">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center text-gray-500">
            <LoadingAnimation width={8} height={8} />
          </div>
        ) : (
          <ul>
            {tasks.length !== 0 ? (
              tasks.map((task) => (
                <li key={task.id} className="hover:bg-white">
                  <div className="flex gap-1 h-8 items-center w-full">
                    <input name="check" type="checkbox" value={task.id} onChange={handleCheckList}/>
                    <strong>{task.title}</strong>
                    <p className="ml-8 lg:block hidden">
                      <b> Description: </b>
                      <em>{task.description}</em>
                    </p>
                    <p className="ml-8 md:block hidden">
                      <b> Due Date: </b>
                      <em>{task.due_date}</em>
                    </p>
                    {task.status === "Completed" ? (
                      <p className="ml-auto text-green-600">
                        <strong>{task.status}</strong>
                      </p>
                    ) : task.status === "Pending" ? (
                      <p className="ml-auto text-blue-500">
                        <strong>{task.status}</strong>
                      </p>
                    ) : (
                      <p className="ml-auto text-yellow-500">
                        <strong>{task.status}</strong>
                      </p>
                    )}
                    <MinusCircleIcon
                      className="w-5 ml-4 text-red-400 hover:text-red-700 cursor-pointer"
                      onClick={() => Delete(task.id)}
                    />
                    <Link to={`/dashboard/tasks/list/detail?taskid=${task.id}`}>
                      <strong>
                        <ArrowRightIcon className="w-5 ml-3 hover:text-red-600 transition duration-200" />
                      </strong>
                    </Link>
                  </div>
                  <hr />
                </li>
              ))
            ) : (
              <div className="w-full h-full flex flex-col justify-center items-center text-gray-400">
                <Link to="/dashboard/taskform">
                  <div className="flex cursor-pointer float-end hover:text-blue-500">
                    <strong>Add</strong>
                    <PlusIcon className="w-6" />
                  </div>
                </Link>
                <strong className="text-2xl">Empty</strong>
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default List;
