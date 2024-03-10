import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './admin.css'

import AdminHome from './AdminHome';
import ViewStudents from './ViewStudents';
import UpdateStudent from './UpdateStudent';
import RecruiterLogin from './../recruiter/RecruiterLogin';

export default function AdminNavBar() 
{
  return (
    <div>

    <nav className="navbar">
     <ul>
     <Link to="/">Home</Link>
     <Link to="/viewstudents">View Students</Link>
     <Link to="/recruiterlogin">Company Login</Link>
     <Link to="/updatestudent">Update Student</Link>
     </ul>
     </nav>

         <Routes>
         <Route path="/" Component={AdminHome} exact/>
         <Route path="/viewstudents" Component={ViewStudents} exact/>
         <Route path="/updatestudent" Component={UpdateStudent} exact/>
         <Route path="/recruiterlogin" Component={RecruiterLogin} exact/>
        </Routes>

    </div>
  )
}