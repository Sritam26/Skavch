import React from "react";
import "./OurLeadership.css";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const leadershipData = [
  {
    name: "John Doe",
    position: "CEO",
    image: "./src/Components/OurLeadership/assets/leader1.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "john@example.com",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: "./src/Components/OurLeadership/assets/leader2.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "jane@example.com",
  }
];

export const OurLeadership = () => {
  return (
    <div className="leadership-container">
      <h2 className="leadership-title">Our Leadership</h2>
      <div className="leaders">
        {leadershipData.map((leader, index) => (
          <div key={index} className="leader">
            <img src={leader.image} alt={leader.name} />
            <h3>{leader.name}</h3>
            <p>{leader.position}</p>
            <div className="social-icons">
              <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={leader.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={`mailto:${leader.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
