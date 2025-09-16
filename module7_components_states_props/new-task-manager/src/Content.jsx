import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Content() {

   const [tasks, setTasks] = useState([]);


   useEffect(() => {    
    fetch('http://localhost:8000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <>
     <section className='w-200 mt-15 mx-auto p-5 shadow'>
    <h1 className='text-2xl'>Task List  <div className="mx-auto  size-12 shrink-0 items-center justify-center rounded-full inline-flex bg-red-600 text-white sm:mx-0 sm:size-10">{tasks.length}</div></h1>
     
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="border-b border-gray-300 py-2">
            <p className="text-gray-600">Task Name :{task.addTask}</p>
            <p className="text-gray-600">Assigned to: {task.assignTo}</p>
            <p className="text-gray-600">Due Date: {task.addDate}</p>
            <p className="text-gray-800">Details : {task.taskDetails}</p>     
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}
