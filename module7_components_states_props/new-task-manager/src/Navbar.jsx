import React, {useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaClipboard } from 'react-icons/fa'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


    

export default function Navbar() {
    
    const [addTask , setaddTask] = useState('');
    const [assignTo , setassignTo] = useState('');
    const [addDate , setaddDate] = useState('');
    const [taskDetails , settaskDetails] = useState('');
    const [users , setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/assign-to')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const taskData = {addTask, assignTo, addDate, taskDetails};

        axios.post('http://localhost:8000/tasks', taskData)
            .then((response) => {
                console.log('Task added successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error adding task:', error);
            });

            navigate('/');
    }

        


  return (
    <>
    <section className='grid grid-cols-2 bg-gray-800 text-white p-4 '>
        <div className='w-full' >
          <Link to="/">
             <button className=' p-2 bg-yellow-500 cursor-alias'><FaBars /></button>
            <b className=' ms-10'><FaClipboard  className='inline-flex ms-2 cursor-auto'/> Task Manager</b>
          </Link>
        </div>

        <div className='w-full'>
            <button className=' p-2 ms-55 ' command="show-modal" commandfor="dialog">Add Task
            </button>

            <Link to="/manage-task">
              <button className=' p-1 rounded-xl ms-4'>ManageTask <div className="mx-auto  size-5 shrink-0 items-center justify-center rounded-full inline-flex bg-red-600 text-white sm:mx-0 sm:size-8">0</div></button>
            </Link>

            <Link to="/contact-us">
              <button className=' p-1 rounded-xl ms-4'>Contact Us</button>
            </Link>
        </div>
         </section>
        
  {/* Include this script tag or install `@tailwindplus/elements` via npm: */}
  {/*  */}
  
  <el-dialog>
    <dialog
      id="dialog"
      aria-labelledby="dialog-title"
      className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
    >
      <el-dialog-backdrop className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
      <div
        tabIndex={0}
        className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
      >
        <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

            <div className='mt-2'>
                <h1 className='text-2xl'>Add Task Here</h1>

            {/*Form add here */}
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className='mt-2'>
                    <input type="text" value={addTask} onChange={(e) => setaddTask(e.target.value)} placeholder='New Task * ' className='p-2 border-1 w-100' />
                </div>

                <div className='mt-2'>
                    <select value={assignTo} onChange={(e) => setassignTo(e.target.value)} className='p-2 border-1 w-100'>
                        <option value="">--Assign To-- *</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='mt-2'>
                    <input type="date" value={addDate} onChange={(e) => setaddDate(e.target.value)} className='p-2 border-1 w-100' />
                </div>

                <div className='mt-2'>
                    <textarea value={taskDetails} onChange={(e) => settaskDetails(e.target.value)} placeholder='Task Details *' className='p-2 border-1 w-100'></textarea>
                </div>

                <div>
                    <input type="submit" value="Add Task"  className='bg-blue-600 text-white p-2 mt-2 rounded-md hover:bg-blue-500' />
                </div>

            </form>
            </div>

          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              command="close"
              commandfor="dialog"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              Cancel
            </button>
            
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
</>

  )
}
