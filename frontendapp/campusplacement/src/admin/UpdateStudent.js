import React, { useState } from 'react';
import axios from 'axios';

export default function UpdateStudent() {
  const [email, setEmail] = useState('');
  const [updatedInfo, setUpdatedInfo] = useState({
    password: '',
    fullname: '', // Changed from fullName to fullname
    contact: '', // Changed from mobileNumber to contact
    location: '',
    gender: '',
    dateOfBirth: ''
  });

  const updateStudentInfo = async () => {
    try {
      await axios.patch(`http://localhost:2032/updatestudent/${email}`, updatedInfo);
      setUpdatedInfo({
        password: '',
        fullname: '', // Changed from fullName to fullname
        contact: '', // Changed from mobileNumber to contact
        location: '',
        gender: '',
        dateOfBirth: ''
      });
      alert("Student information updated successfully");
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleChange = (e) => {
    setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <table>
        <tbody>
          <tr>
            <td>Email:</td>
            <td><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Student Email" /></td>
          </tr>
          <tr>
            <td>New Password:</td>
            <td><input type="text" name="password" value={updatedInfo.password} onChange={handleChange} placeholder="New Password" /></td>
            <td><button onClick={updateStudentInfo}>Update Password</button></td>
          </tr>
          <tr>
            <td>New Full Name:</td> {/* Changed label from Username to Full Name */}
            <td><input type="text" name="fullname" value={updatedInfo.fullname} onChange={handleChange} placeholder="New Full Name" /></td> {/* Changed name from fullName to fullname */}
            <td><button onClick={updateStudentInfo}>Update Full Name</button></td> {/* Changed button text from Username to Full Name */}
          </tr>
          <tr>
            <td>New Contact:</td> {/* Changed label from Mobile Number to Contact */}
            <td><input type="text" name="contact" value={updatedInfo.contact} onChange={handleChange} placeholder="New Contact" /></td> {/* Changed name from mobileNumber to contact */}
            <td><button onClick={updateStudentInfo}>Update Contact</button></td> {/* Changed button text from Mobile Number to Contact */}
          </tr>
          <tr>
            <td>New Location:</td>
            <td><input type="text" name="location" value={updatedInfo.location} onChange={handleChange} placeholder="New Location" /></td>
            <td><button onClick={updateStudentInfo}>Update Location</button></td>
          </tr>
          <tr>
            <td>New Gender:</td>
            <td><input type="text" name="gender" value={updatedInfo.gender} onChange={handleChange} placeholder="New Gender" /></td>
            <td><button onClick={updateStudentInfo}>Update Gender</button></td>
          </tr>
          <tr>
            <td>New Date of Birth:</td>
            <td><input type="text" name="dateOfBirth" value={updatedInfo.dateOfBirth} onChange={handleChange} placeholder="New Date of Birth" /></td>
            <td><button onClick={updateStudentInfo}>Update Date of Birth</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}