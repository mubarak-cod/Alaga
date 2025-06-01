import React from 'react';
import './LandingPage.css'
import alaga from '../assets/alaga.mp4'

const LandingPage = () => {
  return (
    <div style={{ 
      position: 'relative', 
      height: '100vh', 
      width: '100vw', 
      overflow: 'hidden' 
    }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: -2,
        }}
      >
        <source src={alaga} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black overlay
        zIndex: -1,
      }} />

      {/* Content */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        color: 'white', 
        textAlign: 'center', 
        paddingTop: '40vh',
        fontSize: '2rem',
        fontFamily: 'poppins',
        textShadow: '0 0 10px rgb(0, 0, 2)',
      }}>
        
      </div>
    </div>
  );
}

export default LandingPage;
