import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/assets/admincss/admin.css';
import '../src/assets/usercss/user.css';


{/*Admin */}
import AdminLayout from './AdminLayout.jsx';
import AdminLogin from './Components/Admin/AdminLogin.jsx';
import ManageCustomers from './Components/Admin/Pages/ManageCustomers.jsx';
import AddCenters from './Components/Admin/Pages/AddCenters.jsx';
import AddFranchise from './Components/Admin/Pages/AddFranchise.jsx';
import AddCourse from './Components/Admin/Pages/AddCourse.jsx';
import AddBlogs from './Components/Admin/Pages/AddBlogs.jsx';
import ManageReviews from './Components/Admin/Pages/ManageReviews.jsx';
import ManageContact from './Components/Admin/Pages/ManageContact.jsx';


{/*User */}
import UserLayout from './UserLayout.jsx';
import About from './Components/User/Pages/About.jsx';
import Centers from './Components/User/Pages/Centers.jsx';
import Franchies from './Components/User/Pages/Franchies.jsx';
import Courses from './Components/User/Pages/Courses.jsx';
import Placements from './Components/User/Pages/Placements.jsx';
import Contactus from './Components/User/Pages/Contactus.jsx';
import Blogs from './Components/User/Pages/Blogs.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
        <Routes>
          {/*User Panel*/}
          <Route path='/zero2proApp' element={<UserLayout />} />

        
          {/*About */}
          <Route path='/User/Pages/About' element={<About />} />

          {/*Centers */}
          <Route path='/User/Pages/Centers' element={<Centers />} />

          {/*Franchies */}
          <Route path='/User/Pages/Franchies' element={<Franchies />} />

          {/*Courses */}
          <Route path='/User/Pages/Courses' element={<Courses />} />

          {/*Placements */}
          <Route path='/User/Pages/Placements' element={<Placements />} />

          {/*Contactus */}
          <Route path='/User/Pages/Contactus' element={<Contactus />} />

          {/*Blogs */}
          <Route path='/User/Pages/Blogs' element={<Blogs />} />









          {/*Admin panel */}
          <Route path='/admin-login' element={<AdminLogin/>} />
          <Route path='admin-login/dashboard' element={<AdminLayout />} />

          {/*Manage customers */}
          <Route path='admin-login/manage-customers' element={<ManageCustomers/>} />

          {/*Add Centers */}
          <Route path='admin-login/add-centers' element={<AddCenters />} />

          {/*Add Franchise */}
          <Route path='admin-login/add-franchise' element={<AddFranchise />} />

          {/*Add Course */}
          <Route path='admin-login/addcourse' element={<AddCourse />} />

          {/*Add Blogs */}
          <Route path='admin-login/addblogs' element={<AddBlogs />} />

          {/*Manage Reviews */}
          <Route path='admin-login/managereviews' element={<ManageReviews />} />

          {/*Manage Contact */}
          <Route path='admin-login/managecontacts' element={<ManageContact />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
  </StrictMode>
)
