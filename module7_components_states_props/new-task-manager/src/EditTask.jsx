import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [addTask, setAddTask] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [addDate, setAddDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch employees
  useEffect(() => {
    axios.get("http://localhost:8000/addemployee")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  // Fetch task by id
  useEffect(() => {
    axios.get(`http://localhost:8000/tasks/${id}`)
      .then(res => {
        const task = res.data;
        setAddTask(task.addTask);
        setAssignTo(task.assignTo);
        setAddDate(task.addDate);
        setTaskDetails(task.taskDetails);
      })
      .catch(err => {
        console.error("Error fetching task:", err);
        Swal.fire("Error", "Failed to load task", "error");
      });
  }, [id]);

  // Update task
  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedTask = { addTask, assignTo, addDate, taskDetails };

    axios.put(`http://localhost:8000/tasks/${id}`, updatedTask)
      .then(() => {
        Swal.fire("Updated!", "Task updated successfully", "success").then(() => {
          navigate("/");
        });
      })
      .catch(err => {
        console.error("Error updating task:", err);
        Swal.fire("Error", "Failed to update task", "error");
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Edit Task</h1>
      <form onSubmit={handleUpdate} className="space-y-5">
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Task Name *</label>
          <input
            type="text"
            value={addTask}
            onChange={(e) => setAddTask(e.target.value)}
            placeholder="Enter Task Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Assign To *</label>
          <select
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">--Select Employee--</option>
            {users.map((emp) => (
              <option key={emp.id} value={emp.empName}>
                {emp.empName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Task Date *</label>
          <input
            type="date"
            value={addDate}
            onChange={(e) => setAddDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Task Details *</label>
          <textarea
            value={taskDetails}
            onChange={(e) => setTaskDetails(e.target.value)}
            placeholder="Describe the task in detail"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
}
