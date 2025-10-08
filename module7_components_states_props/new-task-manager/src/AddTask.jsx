import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function AddTask() {
  const [addTask, setAddTask] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [addDate, setAddDate] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users
  useEffect(() => {
    axios
      .get('http://localhost:8000/addemployee')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/tasks', { addTask, assignTo, addDate, taskDetails })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Task Added!',
          text: 'Your task was added successfully.',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => navigate('/'));

        // Reset form
        setAddTask('');
        setAssignTo('');
        setAddDate('');
        setTaskDetails('');
      })
      .catch(err => {
        console.error('Error adding task:', err);
        Swal.fire('Error', 'Failed to add task', 'error');
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Add New Task</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task Name */}
        <input
          type="text"
          value={addTask}
          onChange={(e) => setAddTask(e.target.value)}
          placeholder="Task Name *"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Assign To */}
        <select
          value={assignTo}
          onChange={(e) => setAssignTo(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">--Assign To-- *</option>
          {users.map(user => (
            <option key={user.id} value={user.empName}>
              {user.empName}
            </option>
          ))}
        </select>

        {/* Date */}
        <input
          type="date"
          value={addDate}
          onChange={(e) => setAddDate(e.target.value)}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Task Details */}
        <textarea
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
          placeholder="Task Details *"
          rows="5"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
