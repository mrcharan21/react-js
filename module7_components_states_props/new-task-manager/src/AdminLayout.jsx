import React from "react";
import Sidebar from "./admin/Sidebar";
import Header from "./admin/Header";
import Dashboard from "./admin/Dashboard";


export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex pt-24">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-8 ml-64">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
