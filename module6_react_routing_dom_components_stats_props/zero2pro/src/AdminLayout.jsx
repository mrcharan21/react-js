import React from 'react';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Dashboard from './components/Admin/Dashboard';
import AdminHeader from './Components/Admin/AdminHeader';
import Footer from './Components/Admin/Footer';
import AdminSidebar from './Components/Admin/AdminSidebar';
export default function AdminLayout() {
  return (
   <>
  {/* Sticky Navbar */}
  <AdminHeader />

  {/* Sidebar + Scrollable Content Wrapper */}
  <div className="layout-container">
    {/* Sticky Sidebar */}
    <AdminSidebar />

    {/* Scrollable Dashboard */}
    <div className="dashboard-scroll-container">
      <Dashboard />

      {/* Add more components here as needed */}

      {/* Footer */}
      <MDBContainer className="mt-5">
        <Footer />
      </MDBContainer>
    </div>
  </div>
</>

  );
}