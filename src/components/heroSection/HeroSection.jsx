import React from "react";
import img from "../../assets/heroSection_Pic.jpg";
import "./HeroSection.css"

function HeroSection() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1 className="portfolio-name">AKASH KUMAR GOUTAM</h1>
        <img src={img} alt="Profile" className="profile-image" />
        <p className="portfolio-title">PORTFOLIO</p>
        <h1 className="text-2xl">Digital Transformation</h1>
      </div>
    </div>
  );
}

export default HeroSection;



// // import React from 'react';
// // import './Portfolio.css';

// // const Portfolio = () => {
// //   return (
    
// //   );
// // };

// // export default Portfolio;
