import React, { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import "./Header.css";
import introvideo from "./assets/introvideo.mp4";

const industries = [
  { name: "Supplychain & Logistic", icon: "📦" },
  { name: "Banking & Finance", icon: "🏦" },
  { name: "Telecom", icon: "📡" },
  { name: "Pharmacy", icon: "⚕️" },
  { name: "Retail & Ecommerce", icon: "🛒" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Customer Care", icon: "🎧" },
];

export default function Header() {
  const industriesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            industriesRef.current.classList.add("active");
          } else {
            industriesRef.current.classList.remove("active"); // Reset on scroll out
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (industriesRef.current) {
      observer.observe(industriesRef.current);
    }

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Skavch</div>
        <div className="nav-links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Industries</a>
          <a href="#">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <video src={introvideo} autoPlay muted loop className="hero-background" />
        <div className="hero-content">
          <h1>Meet The Digital Drivers Of Global Disruptors</h1>
          <p>Harnessing the power of artificial intelligence to drive innovation and solve complex challenges</p>
        </div>
      </div>

      {/* Industries Section */}
      <div className="industries-section" ref={industriesRef}>
        <h2>Industries We Work</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-item">
              <div className="industry-icon">{industry.icon}</div>
              <p>{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
