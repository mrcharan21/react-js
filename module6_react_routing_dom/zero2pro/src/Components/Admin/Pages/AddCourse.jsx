import React from 'react'
import AdminHeader from '../AdminHeader'
import AdminSidebar from '../AdminSidebar'
import { MDBContainer,MDBRow } from 'mdb-react-ui-kit'


export default function AddCourse() {
  return (
    <>
      {/* Admin Header */}
      <AdminHeader />
        <MDBContainer fluid>
            <MDBRow>
                {/* Admin Sidebar */}
                <AdminSidebar />
                <div className='col-md-10 p-5 vh-100'>
                    <h1>Add Course</h1>
                    <div className='container mt-5'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="courseName" className="form-label">Course Name</label>
                                <input type="text" className="form-control" id="courseName" placeholder="Enter course name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="courseDescription" className="form-label">Course Description</label>
                                <textarea className="form-control" id="courseDescription" rows="3" placeholder="Enter course description"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="courseDuration" className="form-label">Course Duration</label>
                                <input type="text" className="form-control" id="courseDuration" placeholder="Enter course duration (e.g., 3 months)" />
                            </div>
                        </form>
                        <button className='btn btn-primary'>Add Course</button>
                        <button className='btn btn-secondary ms-3'>Cancel</button>
                    </div>
                </div>
            </MDBRow>
            </MDBContainer>
    </>
  )
}
