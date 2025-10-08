import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-40">
      <div className="flex items-center justify-between px-10 py-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Task Manager <span className="text-red-400 text-3xl">Admin</span>
        </h1>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search anything here..."
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <span className="font-semibold text-gray-700">Welcome: Admin</span>
        </div>
      </div>
    </header>
  );
}
