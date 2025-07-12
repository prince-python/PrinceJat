import React from 'react';
import '../App.css'; // If needed for global Tesla font

const Home = () => {
  return (
     <> {/* Tesla Font CDN */}
      <link href="https://fonts.cdnfonts.com/css/tesla" rel="stylesheet" />

   
    <div
      style={{
        
        backgroundImage: `url(${require('../assests/bg1.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
       
        height: '100vh',
        width: '100%',
        display: 'flex',
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
       
      }}
    >
      <img
        src={require('../assests/s.webp')}
        alt="Hacking Animation"
        style={{
          position: 'absolute',
          width: '100vh',
          height: '45%',
          opacity: 1,
          zIndex: 1,
          
        }}
      />

      <h1
        style={{
          position: 'relative',
          zIndex: 2,
          color: 'white',
          fontFamily: 'TESLA',
          fontSize: '2rem',
          textAlign: 'center',
          textShadow: '0 0 0px white',
        }}
      >
        <img
          src="https://readme-typing-svg.demolab.com?font=TESLA+Regular&size=60&duration=4000&pause=1000&color=FFFFFF&center=true&vCenter=true&width=900&lines=Hi+I'm+PRINCE+CHAUDHARY;CYBERSECURITY%7C+PENTESTER;PYTHON+%7C+DJANGO;+REACT+%7C+ETHICAL HACKER;+BACKEND+%7C+FRONTEND"
          alt="Typing SVG"
        />
      </h1>
    </div></>
  );
};

export default Home;
