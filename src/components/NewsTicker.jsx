'use client'
import React from 'react';

const NewsTicker = ({ 
  text, 
  backgroundColor = 'linear-gradient(90deg, #0ABBD7 0%, #4442B5 20.83%, #8413A5 39.58%, #FF3B99 56.77%, #FE6E00 71.87%, #FF9000 85.42%, #FFB502 100%)', 
  textColor = 'white',
  duration = 30 // Animation duration in seconds
}) => {
  return (
    <div 
      className="w-full overflow-hidden"
      style={{ background: backgroundColor, color: textColor }}
    >
      <div className="py-4 px-0 relative">
        <div className="ticker-container">
          <p className="ticker-text " style={{ animationDuration: `${duration}s` }}>
            {text}
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .ticker-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        
        .ticker-text {
          white-space: nowrap;
          padding-left: 100%;
          animation: ticker linear infinite;
          font-weight: bold;
          font-size: 3rem;
        }
        
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-340%);
          }
        }
        
        @media (max-width: 768px) {
          .ticker-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsTicker; 