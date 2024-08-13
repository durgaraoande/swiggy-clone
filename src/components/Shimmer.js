import React from 'react';
import './Shimmer.css'; // Make sure to import the CSS file

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(8).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-description"></div>
          <div className="shimmer-location"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
