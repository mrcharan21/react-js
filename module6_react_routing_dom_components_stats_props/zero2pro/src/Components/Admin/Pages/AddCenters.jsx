import React from 'react'
import AdminHeader from '../AdminHeader'
import AdminSidebar from '../AdminSidebar'
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit'

export default function AddCenters() {
    return (
        <>
            <AdminHeader />

            {/*Admin sidebar & Dashboard */}
            <MDBContainer fluid>
                <MDBRow>
                    <AdminSidebar />
                    <div className='col-md-10 p-5 vh-100'>
                        <h1>Add Centers</h1>
                        <form>
                            <div className="form-group mt-2">
                                
                                <select className="form-control">
                                    <option value="">Select Center Type</option>
                                    <option value="Tops">Tops Tech</option>
                                    <option value="IT">Amazom</option>
                                    <option value="lab">Lab</option>
                                </select>
                            </div>
                            <div className="form-group mt-2">
                                <select className="form-control">
                                    <option value="">Select Course Type</option>
                                    <option value="hospital">Front end development</option>
                                    <option value="IT">Back end development</option>
                                    <option value="lab">Lab</option>
                                </select>
                            </div>
                            <div className="form-group mt-2">
                                <input
                                    type="text"
                                    placeholder="Center Address *"
                                    className="form-control"
                                />
                            </div>
                        </form>
                        <button className="btn btn-primary mt-3">Add Center</button>
                        <button className="btn btn-secondary mt-3 ms-2">Cancel</button>
                    </div>
                </MDBRow>
            </MDBContainer>
        </>
    )
}
