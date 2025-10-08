import React, { useState, useRef } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [messageType, setMessageType] = useState("");

  const empPhoto = useRef();
  const empName = useRef();
  const empAge = useRef();
  const empEmail = useRef();
  const empPhone = useRef();
  const empAddress = useRef();

  const navigate = useNavigate();

  // Function to add employee data
  const AddEmployeeData = async (e) => {
    e.preventDefault();

    const insert = {
      empPhoto: empPhoto.current.value,
      empName: empName.current.value,
      empAge: empAge.current.value,
      empEmail: empEmail.current.value,
      empPhone: empPhone.current.value,
      empAddress: empAddress.current.value,
    };

    try {
      await axios.post("http://localhost:8000/addemployee", insert);

      setMessageContent("Employee Added Successfully!");
      setMessageType("success");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);

      e.target.reset();
      navigate("/admin-login/add-employee");
    } catch (err) {
      setMessageContent("Error in Adding Employee");
      setMessageType("error");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
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
            Add New Employee
          </h1>
          <hr className="border-gray-300 mb-6" />

          {/* Flash Message */}
          {showMessage && (
            <div
              className={`${
                messageType === "success"
                  ? "bg-green-500"
                  : "bg-red-500"
              } text-white p-3 rounded shadow mb-6 transition duration-300`}
            >
              {messageContent}
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={AddEmployeeData}
            className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto space-y-6"
          >
            <div>
              <label
                htmlFor="empPhoto"
                className="block text-gray-700 font-medium mb-2"
              >
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

            <div>
              <label
                htmlFor="empName"
                className="block text-gray-700 font-medium mb-2"
              >
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

            <div>
              <label
                htmlFor="empAge"
                className="block text-gray-700 font-medium mb-2"
              >
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

            <div>
              <label
                htmlFor="empEmail"
                className="block text-gray-700 font-medium mb-2"
              >
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

            <div>
              <label
                htmlFor="empPhone"
                className="block text-gray-700 font-medium mb-2"
              >
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

            <div>
              <label
                htmlFor="empAddress"
                className="block text-gray-700 font-medium mb-2"
              >
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
              Add Employee
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
