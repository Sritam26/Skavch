import React from 'react';
import './WorkTogether.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const WorkTogether = () => {
  return (
    <div className="work-container">
      <div className="left">
        <h2 className="text">Let's work together!</h2>
        <p>Book a free consultation.</p>
        <button>Contact Us</button>
        <p>Skavch LLP, K Raheja Mindspace, Survey No. 64, Building Number 9, 13th Floor, Madhapur, Hyderabad, Telangana 500081.</p>
        
        <p><span className="label">Phone:</span> <span className="info">+91 12345 67890</span></p>
        <p><span className="label">Email:</span> <span className="info">contact@skavch.com</span></p>

        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="right">
        <img src="./src/Components/WorkTogether/assets/group.jpeg" alt="Work Together" />
      </div>
    </div>
  );
};
