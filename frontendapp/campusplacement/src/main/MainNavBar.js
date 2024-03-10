import React from 'react'
import Home from './Home'
import {Routes,Route,Link} from 'react-router-dom'
import About from './About'
import Registration from './../student/Registration';
import Contact from './Contact';
import StudentLogin from './../student/StudentLogin';
import './style.css'
import AdminLogin from '../admin/AdminLogin'
import StudentHome from '../student/StudentHome';
import RRegistration from '../recruiter/RRegistration';
import RecruiterLogin from '../recruiter/RecruiterLogin';
import RecruiterHome from '../recruiter/RecruiterHome';


export default function MainNavBar() {
  return (
    <div>
        <nav>
        <ul>
            <Link class="active" to="/">Home</Link>
            <Link  to="/about">About</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/recruiterregistration">Company Registration</Link>
            <Link to="/studentlogin">Student Login</Link>
            <Link to="/adminLogin">Admin Login</Link>
            <Link to="/contact">Contact</Link>
            {/* <Link to="/studenthome">Student Home</Link> */}
            </ul>
        </nav>

        


        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/registration" element={<Registration/>} exact/>
        <Route path="/recruiterregistration" element={<RRegistration/>} exact/>
        <Route path="/studentlogin" element={<StudentLogin/>} exact/>
        <Route path="/recruiterlogin" element={<RecruiterLogin/>}exact/>
        <Route path="/adminlogin" element={<AdminLogin/>} exact/>
        <Route path='/contact' element={<Contact/>} exact/>
        <Route path='/studenthome' element={<StudentHome/>} exact/>
        <Route path='/recruiterhome' element={<RecruiterHome/>} exact/>
        </Routes>
    </div>
  )
}

