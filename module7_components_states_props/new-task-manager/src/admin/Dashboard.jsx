import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/addemployee").then((res) => setEmployees(res.data)).catch(() => setEmployees([]));
    axios.get("http://localhost:8000/tasks").then((res) => setTasks(res.data)).catch(() => setTasks([]));
    axios.get("http://localhost:8000/contact-us").then((res) => setContacts(res.data)).catch(() => setContacts([]));
    axios.get("http://localhost:8000/reviews").then((res) => setReviews(res.data)).catch(() => setReviews([]));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex pt-5">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-8 mt-0 ml-0">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mb-10">
            <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-sm font-medium">Employees</h2>
              <p className="text-3xl font-bold mt-2">{employees.length}</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-400 text-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-sm font-medium">Tasks</h2>
              <p className="text-3xl font-bold mt-2">{tasks.length}</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-sm font-medium">Contacts</h2>
              <p className="text-3xl font-bold mt-2">{contacts.length}</p>
            </div>
            <div className="bg-gradient-to-r from-red-500 to-red-400 text-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-sm font-medium">Reviews</h2>
              <p className="text-3xl font-bold mt-2">{reviews.length}</p>
            </div>
          </div>

          {/* Latest Employees Table */}
          <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest Employees</h2>
            <table className="min-w-full divide-y divide-gray-200 rounded-lg">
              <thead className="bg-gray-100 rounded-t-lg">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">#</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">Photo</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">Name</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">Email</th>
                  <th className="py-3 px-4 text-left text-gray-600 font-medium uppercase text-sm">Phone</th>
                  <th className="py-3 px-4 text-center text-gray-600 font-medium uppercase text-sm">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-4 px-4 text-center text-gray-400">
                      No Employees Found
                    </td>
                  </tr>
                ) : (
                  employees.slice(0, 10).map((emp, index) => (
                    <tr key={emp._id || emp.id} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="py-3 px-4">{index + 1}</td>
                      <td className="py-3 px-4">
                        <img
                          src={emp.empPhoto}
                          alt="Employee"
                          className="w-12 h-12 object-cover rounded-full border border-gray-300"
                        />
                      </td>
                      <td className="py-3 px-4 font-medium">{emp.empName}</td>
                      <td className="py-3 px-4">{emp.empEmail}</td>
                      <td className="py-3 px-4">{emp.empPhone}</td>
                      <td className="py-3 px-4 text-center">
                        <div className="inline-flex items-center gap-2 justify-center">
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200 text-sm"
                            onClick={() => navigate(`/admin-login/edit-employee/${emp.id}`)}
                          >
                            Edit
                          </button>
                          <button
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200 text-sm"
                            onClick={() => navigate(`/admin-login/delete-employee/${emp.id}`)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
