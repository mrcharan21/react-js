import React from 'react'
import { FaUser, FaToolbox, FaBuilding, FaUserPlus, FaBook, FaBlog, FaStar, FaEnvelope, FaCalendarCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <>
      <div className='d-flex flex-column col-md-2 bg-dark m-0 p-2 shadow vh-100'>
        <ul className='sidebar-links'>
          <li>
            <Link to="/admin-login/dashboard"><FaUser /> &nbsp;Dashboard</Link>
          </li>
          <li>
            <Link to="/admin-login/manage-customers"><FaToolbox /> &nbsp;Manage Customers</Link>
          </li>
          <li>
            <Link to="/admin-login/add-centers"><FaBuilding /> &nbsp;Add Centers</Link>
          </li>
          <li>
            <Link to="/admin-login/add-franchise">
              <FaUserPlus />
              &nbsp;Add Franchise
            </Link>
          </li>
          <li>
            <Link to="/admin-login/addcourse">
              <FaBook />
              &nbsp;Add Courses
            </Link>
          </li>
          <li>
            <Link to="/admin-login/addblogs">
              <FaBlog />
              &nbsp;Add Blogs
            </Link>
          </li>
          <li>
            <Link to="/admin-login/managereviews">
              <FaStar />
              &nbsp;Manage Reviews
            </Link>
          </li>
          <li>
            <Link to="/admin-login/managecontacts">
              <FaEnvelope />
              &nbsp;Manage Contacts
            </Link>
          </li>
          <li>
            <Link to="/admin-login/loggedin">
              <FaCalendarCheck />
              &nbsp;Logged in on :
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
