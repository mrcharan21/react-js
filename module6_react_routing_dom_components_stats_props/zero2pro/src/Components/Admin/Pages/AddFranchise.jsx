import React from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminHeader from '../AdminHeader'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

export default function AddFranchise() {
  return (
    <>
    {      /* Admin Header */}
      <AdminHeader />

      <MDBContainer fluid>
        <MDBRow>
            <AdminSidebar />
        <div className='col-md-10 p-5 vh-100'>
        <h1>Add Franchise</h1>
        <div className='container mt-5'>
            <form>
                <div className="mb-3">
        
                    <select className="form-select">
                        <option value="">Select Franchise</option>
                        <option value="franchise1">Franchise 1</option>
                        <option value="franchise2">Franchise 2</option>
                    </select>
                </div>
            </form>
            <button className='btn btn-primary'>Add Franchise</button>
            <button className='btn btn-secondary ms-3'>Cancel</button>
        </div>
        </div>
        </MDBRow>
        </MDBContainer>
    </>
  )
}
