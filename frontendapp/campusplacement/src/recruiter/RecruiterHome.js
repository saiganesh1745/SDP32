import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RecruiterHome() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:2032/viewstudents');
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (email) => {
    try {
      await axios.delete(`http://localhost:2032/deletestudent/${email}`);
      fetchStudents();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Students</h1>
      
      <table  border={1} align="center" style={{ width: 'auto', height: 'auto' }}  className="students-table" >
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(students) && students.length > 0 ? (
    students.map((students, index) => (
      <tr key={index}>
        <td>{students.fullname}</td>
        <td>{students.gender}</td>
        <td>{students.dateofbirth}</td>
        <td>{students.email}</td>
        <td>{students.location}</td>
        <td>{students.contact}</td>
        <td>
          <button onClick={() => deleteStudent(students.email)} className='button1'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}