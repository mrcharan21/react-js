import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // ✅ import sweetalert2

export default function AddTask({ onTaskAdded }) {
  const [taskName, setTaskName] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [addedDate, setAddedDate] = useState("");
  const [status, setStatus] = useState("Not Completed");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      taskName,
      assignTo,
      addedDate,
      status,
    };

    try {
      const res = await axios.post("http://localhost:5000/add-tasks", newTask);

      console.log("✅ Task added:", res.data);

      Swal.fire({
        icon: "success",
        title: "Task added successfully!",
        text: "Thank you 😊",
      });

      // Reset form
      setTaskName("");
      setAssignTo("");
      setAddedDate("");
      setStatus("Not Completed");

      // Comment this out for now (to avoid errors)
      // onTaskAdded(res.data);
    } catch (err) {
      console.error("❌ Error adding task:", err);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while adding the task!",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      {/* ✅ Centered form with responsive padding */}
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 p-6 rounded-lg shadow-md bg-white text-center"
      >
        {/* ✅ Responsive width depending on screen size */}

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
          Add New Task
        </h2>

        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 w-full mb-3 rounded text-sm sm:text-base"
          required
        />

        <input
          type="text"
          placeholder="Assign To"
          value={assignTo}
          onChange={(e) => setAssignTo(e.target.value)}
          className="border p-2 w-full mb-3 rounded text-sm sm:text-base"
          required
        />

        <input
          type="date"
          value={addedDate}
          onChange={(e) => setAddedDate(e.target.value)}
          className="border p-2 w-full mb-3 rounded text-sm sm:text-base"
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 w-full mb-3 rounded text-sm sm:text-base"
        >
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
