import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <div>
            <h3>Professional Recommendations</h3>
            <p className="date">Coming Soon</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>✨ Professional recommendations and testimonials will be added here.</p>
          <p>💼 Connect with me on <a href="https://www.linkedin.com/in/bishal-thakur" target="_blank" rel="noopener noreferrer">LinkedIn</a> to see my professional network and endorsements.</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
