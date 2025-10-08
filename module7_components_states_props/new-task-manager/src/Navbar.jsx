import React from 'react';
import { FaBars, FaClipboard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section className="grid grid-cols-2 bg-gray-800 text-white p-4">
      {/* Left side */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <button className="p-2 bg-yellow-500 cursor-pointer rounded">
            <FaBars />
          </button>
          <span className="font-bold text-lg flex items-center">
            <FaClipboard className="inline mr-2" /> Task Manager
          </span>
        </Link>
      </div>

      {/* Right side */}
      <div className="flex justify-end items-center space-x-4">
        <Link to="/add-task">
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
            Add Task
          </button>
        </Link>

        <Link to="/manage-task">
          <button className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 transition">
            Manage Task
          </button>
        </Link>

        <Link to="/contact-us">
          <button className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}
