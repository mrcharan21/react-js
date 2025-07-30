import React from 'react';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBRow } from 'mdb-react-ui-kit';
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';


export default function ManageCustomers() {
    return (
        <>
            <AdminHeader />
            <MDBContainer fluid>
                <MDBRow>
                    <AdminSidebar/>
                    <div className='col-md-10 p-5 vh-100'>
                        <h1>Manage Customers</h1>
                        <MDBTable>
                            <MDBTableHead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td>1</td>
                                    <td>Charan</td>
                                    <td>charan@gmail.com</td>
                                    <td>9345873234</td>
                                    <td>City Center Rajkot</td>
                                    <td>
                                        <button className='btn btn-primary'>Edit</button>
                                        <button className='btn btn-danger ms-2'>Delete</button>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </MDBRow>
            </MDBContainer>
        </>
    );
}
