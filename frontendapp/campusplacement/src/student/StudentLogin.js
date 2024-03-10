import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/checkstudentlogin', formData);
      if (response.data!=null) 
      {
        console.log(response.data)
        navigate("/studenthome");
        // window.location.href="https://newerp.kluniversity.in/"
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  const onReCAPTCHAChange = (token) => {
    console.log("reCAPTCHA token:", token);
    // You can handle the token here or use it in your form submission
  };

  return (
    <div className='bg1'>
      <h3 align="center"><u>Student Login</u></h3>
      {message ? <h4 align="center" style={{color:"red"}}>{message}</h4> : <h4 align="center">{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
          
        </div>
        <ReCAPTCHA
          sitekey="6Lf-GWYpAAAAAEGEn3FdyMXvxLhc5Y-_uzFzCXtE"
          onChange={onReCAPTCHAChange}
        />
        <button type="submit" className="button">Login</button>

        <p>
          New User ?   <a href="/registration" className="button2">Register Here</a>
        </p>

      </form>

      <footer className='footer1'>
        <b>&copy; Surya Kiran Jonnalagadda</b>
      </footer>

    </div>
  );
}
