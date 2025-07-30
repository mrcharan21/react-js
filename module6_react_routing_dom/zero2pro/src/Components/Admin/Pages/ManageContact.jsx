import React from 'react'
import AdminHeader from '../AdminHeader'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import AdminSidebar from '../AdminSidebar'

export default function ManageContact() {
  return (
    <>
    {/* Admin Header */}
    <AdminHeader />

        <MDBContainer fluid>
            <MDBRow>
                {/* Admin Sidebar */}
                <AdminSidebar />
                <div className='col-md-10 p-5 vh-100'>
                    <h1>Manage Contact</h1>
                    <div className='container mt-5'>
                        <p>Here you can manage contact information.</p>
                        {/* Add functionality to manage contact information here */}
                        <form>
                            <div className="mb-3">
                                <label htmlFor="contactEmail" className="form-label">Contact Email</label>
                                <input type="email" className="form-control" id="contactEmail" placeholder="Enter contact email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactPhone" className="form-label">Contact Phone</label>
                                <input type="tel" className="form-control" id="contactPhone" placeholder="Enter contact phone number" />
                            </div>
                        </form>
                        <button className='btn btn-secondary'>Upload</button>
                        <button className='btn btn-primary ms-3'>Update Contact</button>
                        <button className='btn btn-danger ms-3'>Cancel</button>
                    </div>
                </div>
            </MDBRow>
        </MDBContainer>
    </>
  )
}
