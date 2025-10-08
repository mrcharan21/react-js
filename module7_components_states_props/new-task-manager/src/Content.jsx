import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Content() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  // Fetch tasks
  useEffect(() => {
    axios.get('http://localhost:8000/tasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  // Delete task
  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: 'Delete this task?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, Delete!'
  //   }).then(result => {
  //     if (result.isConfirmed) {
  //       axios.delete(`http://localhost:8000/tasks/${id}`)
  //         .then(() => {
  //           setTasks(tasks.filter(task => task.id !== id));
  //           Swal.fire('Deleted!', 'Task deleted successfully', 'success');
  //         });
  //     }
  //   });
  // };

  // // Navigate to edit page with task id
 
  // const handleEdit = (id) => {
  //   navigate(`/edit/${id}`); // Correct route for edit
  // };

  return (
    <section className="w-200 mt-15 mx-auto p-5 shadow">
      <h1 className="text-2xl flex gap-2">
        Task List 
        <span className="bg-red-600 text-white rounded-full px-3">{tasks.length}</span>
      </h1>

      <ul className="mt-4">
        {tasks.map(task => (
          <li key={task.id} className="border-b py-2 flex justify-between items-center">
            <div>
              <p>Task: {task.addTask}</p>
              <p>Assign To: {task.assignTo}</p>
              <p>Due Date: {task.addDate}</p>
              <p>Details: {task.taskDetails}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  navigate(`/edit-task/${task.id}`);
                }}
                className="bg-blue-500 text-white px-2 rounded"
              >
                Edit
              </button>
              <button 
                onClick={() => {
                  navigate(`/delete-task/${task.id}`);
                }} 
                className="bg-red-500 text-white px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
