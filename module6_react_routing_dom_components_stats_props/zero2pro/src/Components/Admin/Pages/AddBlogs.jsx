import React from 'react'
import AdminHeader from '../AdminHeader'
import AdminSidebar from '../AdminSidebar'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

export default function AddBlogs() {
  return (
    <>
    {/* Admin Header */}
    <AdminHeader />
    <MDBContainer fluid>
        <MDBRow>
            {/* Admin Sidebar */}
            <AdminSidebar />
            <div className='col-md-10 p-5 vh-100'>
                <h1>Add Blogs</h1>
                <div className='container mt-5'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="blogTitle" className="form-label">Blog Title</label>
                            <input type="text" className="form-control" id="blogTitle" placeholder="Enter blog title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="blogContent" className="form-label">Blog Content</label>
                            <textarea className="form-control" id="blogContent" rows="5" placeholder="Enter blog content"></textarea>
                        </div>
                    </form>
                    <button className='btn btn-primary'>Add Blog</button>
                    <button className='btn btn-secondary ms-3'>Cancel</button>
                </div>
            </div>
        </MDBRow>
    </MDBContainer>
    </>
  )
}
