import React from 'react'
import UserList from './UserList'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Router>  
    <Routes>
  <Route path="/" element={<UserList />} />
  <Route path="/edit/:id" element={<UpdateUser />} />
  <Route path="/delete/:id" element={<DeleteUser />} />
</Routes>
    </Router>  
   </>
  )
}
