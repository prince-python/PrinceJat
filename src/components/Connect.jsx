import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
const toolIconStyle = {
  color: '#fff',
  
  background: '#111',
 
  borderRadius: '8px',
  boxShadow: '0 0 10px #aaa',
};
const Connect = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet" />

      <style>{`
        .tesla-font {
          font-family: 'Orbitron', sans-serif;
        }
        .social-icon {
          font-size: 5rem;
          color: white;
          transition: transform 0.3s ease;
        }
        .social-icon:hover {
          transform: scale(1.2);
          color: #00ffcc;
        }
        .social-label {
          margin-top: 10px;
          font-size: 1.2rem;
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>

      <center>
        <div className='p-4 container-fluid bg-transparent rounded-4 w-75' id='social'>
          <div className='container-fluid p-4 bg-transparent rounded-4 mb-5' style={{ boxShadow: "0px 0px 10px white" }}>
            <span data-aos="zoom-out-left" className='text-white tesla-font'>STAY CONNECTED WITH ME</span>
          </div>

          <div className="row">
            <div className="col-sm-4 rounded-4 border border-dark p-5 bg-transparent d-flex flex-column align-items-center justify-content-center" data-aos="zoom-out" style={{ minHeight: "200px", boxShadow: "0px 0px 10px white" }}>
              <a href="https://www.youtube.com/channel/UCyUGNzzEY0xYyWux5aPOGow" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="social-icon" style={toolIconStyle} />
              </a>
              <div className="text-white social-label">YouTube</div>
            </div>
            <div className="col-sm-4 rounded-4 border border-dark p-5 bg-transparent d-flex flex-column align-items-center justify-content-center" data-aos="zoom-out" style={{ minHeight: "200px", boxShadow: "0px 0px 10px white" }}>
              <a href="https://github.com/prince-python" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon"  style={toolIconStyle}/>
              </a>
              <div className="text-white social-label" >GitHub</div>
            </div>
            <div className="col-sm-4 rounded-4 border border-dark p-5 bg-transparent d-flex flex-column align-items-center justify-content-center" data-aos="zoom-out" style={{ minHeight: "200px", boxShadow: "0px 0px 10px white" }}>
              <a href="https://www.linkedin.com/in/prince-chaudhary-253b36350/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" style={toolIconStyle} />
              </a>
              <div className="text-white social-label">LinkedIn</div>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Connect;