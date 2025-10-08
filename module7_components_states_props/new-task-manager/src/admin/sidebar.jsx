import React from "react";

export default function Sidebar() {
  return (
    <div className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-gray-900 text-white shadow-lg flex flex-col items-center pt-10 z-50">
      {/* Profile Image */}
      <img
        src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-corporate-businessman-avatar-tie-associate-picture-image_8289503.png"
        alt="sidebar-profile"
        className="w-20 h-20 rounded-full mb-4 border-2 border-gray-700"
      />
      <p className="font-semibold mb-6">Admin</p>

      {/* Sidebar Links */}
      <ul className="w-full flex flex-col space-y-1 px-4">
        <li>
          <a
            href="/admin-login/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Dashboard
          </a>
        </li>

        <li>
          <a
            href="/admin-login/manage-customers"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Manage Customers
          </a>
        </li>

        <li className="relative group">
          <a
            href="#"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Employee Options
          </a>
          {/* Dropdown */}
          <ul className="absolute left-full top-0 hidden group-hover:block bg-gray-800 shadow-md min-w-[180px]">
            <li>
              <a
                href="/admin-login/add-employee"
                className="block px-4 py-2 hover:bg-gray-700 transition duration-200"
              >
                Add Employee
              </a>
            </li>
            <li>
              <a
                href="/admin-login/manage-employee"
                className="block px-4 py-2 hover:bg-gray-700 transition duration-200"
              >
                Manage Employee
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="/admin-login/manage-contact"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Manage Contact
          </a>
        </li>

        <li>
          <a
            href="/admin-login/manage-reviews"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Manage Reviews
          </a>
        </li>

        <li>
          <a
            href="/admin-login/manage-tasks"
            className="block px-4 py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Manage Tasks
          </a>
        </li>

        <li>
          <a
            href="/admin-login/logout"
            className="block px-4 py-2 mt-6 w-full text-center bg-red-600 rounded hover:bg-red-500 transition duration-200"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
