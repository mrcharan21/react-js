import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ManageEmployee() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch Employee Data
  useEffect(() => {
    axios
      .get("http://localhost:8000/addemployee")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
      });
  }, []);

  // Filter to allow only valid names
  const filteredData = Array.isArray(data)
    ? data.filter((row) => /^[A-Za-z]/.test(row.empName))
    : [];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex pt-24">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-8 ml-64">
          <h1 className="text-3xl font-bold text-gray-800">Manage Employee</h1>
          <hr className="my-4 border-gray-300 w-1/3" />

          {/* Table Wrapper */}
          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-4 text-left border-b">#</th>
                  <th className="py-3 px-4 text-left border-b">Photo</th>
                  <th className="py-3 px-4 text-left border-b">Name</th>
                  <th className="py-3 px-4 text-left border-b">Age</th>
                  <th className="py-3 px-4 text-left border-b">Email</th>
                  <th className="py-3 px-4 text-left border-b">Phone</th>
                  <th className="py-3 px-4 text-left border-b">Address</th>
                  <th className="py-3 px-4 text-center border-b">Actions</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                {filteredData.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="py-4 px-4 text-center text-gray-500"
                    >
                      No Employees Found
                    </td>
                  </tr>
                ) : (
                  filteredData.map((row, index) => (
                    <tr
                      key={row._id || row.id}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="py-3 px-4 border-b">{index + 1}</td>
                      <td className="py-3 px-4 border-b">
                        <img
                          src={row.empPhoto}
                          alt="Employee"
                          className="w-14 h-14 object-cover rounded-full border border-gray-300"
                        />
                      </td>
                      <td className="py-3 px-4 border-b font-medium">
                        {row.empName}
                      </td>
                      <td className="py-3 px-4 border-b">{row.empAge}</td>
                      <td className="py-3 px-4 border-b">{row.empEmail}</td>
                      <td className="py-3 px-4 border-b">{row.empPhone}</td>
                      <td className="py-3 px-4 border-b">{row.empAddress}</td>
                      <td className="py-3 px-4 border-b text-center">
                        <div className="inline-flex items-center justify-center gap-2">
                          <button
                            type="button"
                            className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition duration-200 text-sm"
                            onClick={() =>
                              navigate(`/admin-login/delete-employee/${row.id}`)
                            }
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition duration-200 text-sm"
                            onClick={() =>
                              navigate(`/admin-login/edit-employee/${row.id}`)
                            }
                          >
                            Edit
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
