import React from 'react'
import { MDBNavbar } from 'mdb-react-ui-kit'

export default function Category() {
  return (
    <>
    <MDBNavbar className='w-100 p-4'>
        <ul className='sidebar-cate'>
            <li><a href="">Laravel Course</a></li>
            <li><a href="">React Course</a></li>
            <li><a href="">BlockChain Course</a></li>
            <li><a href="">Angular course</a></li>
            <li><a href="">Wordpress Course</a></li>
            <li><a href="">Offers</a></li>
        </ul>
    </MDBNavbar>
    </>
  )
}
