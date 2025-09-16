import React, { useEffect, useState } from "react";
import { FaTasks, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ContentApp() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks on load
  useEffect(() => {
    axios
      .get("http://localhost:5000/add-tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/add-tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="max-w-6xl p-4 sm:p-6 lg:p-8 mx-auto  mt-1 text-center">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
        Task Manager App{" "}
        <button className="bg-red-700 text-white text-sm sm:text-base px-3 py-2 rounded-lg ml-2">
          Total Task <FaTasks className="inline ml-1" />
          <sup className="text-lg sm:text-xl ml-1 cursor-pointer">{tasks.length}</sup>
        </button>
      </h1>

      <hr className="w-1/2 mx-auto mb-3" />
      <div className="overflow-x-auto">

      <table className="min-w-full border-collapse">
        <thead>
          <tr align="text-left">
            <th className="py-2 px-2 text-xs sm:text-sm md:text-base">TaskName</th>
            <th className="py-2 px-2 text-xs sm:text-sm md:text-base">AssignTo</th>
            <th className="py-2 px-2 text-xs sm:text-sm md:text-base">Added Date</th>
            <th className="py-2 px-2 text-xs sm:text-sm md:text-base">Status</th>
            <th className="py-2 px-2 text-xs sm:text-sm md:text-base">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} align="left">
              <td  className="px-2 py-1 text-xs sm:text-sm md:text-base">{task.taskName}</td>
              <td  className="px-2 py-1 text-xs sm:text-sm md:text-base">{task.assignTo}</td>
              <td  className="px-2 py-1 text-xs sm:text-sm md:text-base">{task.addedDate}</td>
              <td>
                <button
                  className={`px-2 py-1 rounded-lg text-xs sm:text-sm md:text-base  ${
                    task.status === "Completed"
                      ? "bg-green-200"
                      : "bg-red-200"
                  }`}
                >
                  {task.status}
                </button>
              </td>
              <td className="flex space-x-2 px-2 py-2">
                <button className="text-green-600 hover:text-green-800">
                  <FaEdit size={18} />
                </button>{" "}
                |{" "}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FaTrash size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>      

       {/* ✅ Navigate to AddTask page */}
      <Link to="/add-task">
        <button className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">
          Add Task
        </button>
      </Link>
    </div>
  );
}
