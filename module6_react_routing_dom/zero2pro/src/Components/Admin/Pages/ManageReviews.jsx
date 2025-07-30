import React from 'react'
import AdminHeader from '../AdminHeader'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import AdminSidebar from '../AdminSidebar'

export default function ManageReviews() {
  return (
    <>
    {/* Admin Header */}
    <AdminHeader />
        <MDBContainer fluid>
            <MDBRow>
                {/* Admin Sidebar */}
                <AdminSidebar />
                <div className='col-md-10 p-5 vh-100'>
                    <h1>Manage Reviews</h1>
                    <div className='container mt-5'>
                        <p>Here you can manage customer reviews.</p>
                        {/* Add functionality to manage reviews here */}
                        <div className='row'>
                            <div className='col-md-6'>
                                <h2>Pending Reviews</h2>
                                {/* List pending reviews here */}
                                <ul>
                                    <li>Review 1</li>
                                    <li>Review 2</li>
                                    <li>Review 3</li>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <h2>Approved Reviews</h2>
                                {/* List approved reviews here */}
                                <ul>
                                    <li>Review A</li>
                                    <li>Review B</li>
                                    <li>Review C</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </MDBRow>
        </MDBContainer>
    </>
  )
}
