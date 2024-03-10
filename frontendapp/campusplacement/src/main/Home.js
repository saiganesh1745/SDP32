import React from 'react';
import Footer from './Footer'; // Import the Footer component
import SocialMediaIcons from '../Icons/SocialMediaIcons';



export default function Home() {
  return (
    <div>
      <h3 align='left'>Welcome, This is Campus placement Management System</h3>
      <Footer /> {Footer}
      <SocialMediaIcons/>{SocialMediaIcons}
    </div>
  );
}
