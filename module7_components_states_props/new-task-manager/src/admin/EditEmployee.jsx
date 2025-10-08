import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
  const [data, setData] = useState(null);

  const empPhoto = useRef();
  const empName = useRef();
  const empAge = useRef();
  const empEmail = useRef();
  const empPhone = useRef();
  const empAddress = useRef();

  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch existing employee data
  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:8000/addemployee/${id}`)
      .then((response) => {
        const emp = response.data;
        setData(emp);

        if (empPhoto.current) empPhoto.current.value = emp.empPhoto || "";
        if (empName.current) empName.current.value = emp.empName || "";
        if (empAge.current) empAge.current.value = emp.empAge || "";
        if (empEmail.current) empEmail.current.value = emp.empEmail || "";
        if (empPhone.current) empPhone.current.value = emp.empPhone || "";
        if (empAddress.current) empAddress.current.value = emp.empAddress || "";
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to fetch employee details.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  }, [id]);

  // Update employee data
  const updEmployeeData = async (e) => {
    e.preventDefault();
    if (!id) return;

    const updatedEmployee = {
      empPhoto: empPhoto.current.value,
      empName: empName.current.value,
      empAge: empAge.current.value,
      empEmail: empEmail.current.value,
      empPhone: empPhone.current.value,
      empAddress: empAddress.current.value,
    };

    try {
      await axios.put(`http://localhost:8000/addemployee/${id}`, updatedEmployee);
      Swal.fire({
        text: "Employee data updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => navigate("/admin-login/manage-employee"));
    } catch {
      Swal.fire({
        title: "Error!",
        text: "Failed to update employee details.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex pt-24">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-8 ml-64">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Edit Employee Details
          </h1>
          <hr className="border-gray-300 mb-6" />

          <form
            onSubmit={updEmployeeData}
            className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto space-y-6"
          >
            {/* Employee Photo */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="empPhoto">
                Employee Photo URL
              </label>
              <input
                type="text"
                id="empPhoto"
                ref={empPhoto}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            {/* Employee Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="empName">
                Employee Name
              </label>
              <input
                type="text"
                id="empName"
                ref={empName}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            {/* Employee Age */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="empAge">
                Employee Age
              </label>
              <input
                type="number"
                id="empAge"
                ref={empAge}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            {/* Employee Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="empEmail">
                Employee Email
              </label>
              <input
                type="email"
                id="empEmail"
                ref={empEmail}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            {/* Employee Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="empPhone">
                Employee Phone
              </label>
              <input
                type="text"
                id="empPhone"
                ref={empPhone}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            {/* Employee Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="empAddress">
                Employee Address
              </label>
              <input
                type="text"
                id="empAddress"
                ref={empAddress}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Update Employee
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
