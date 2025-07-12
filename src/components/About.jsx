import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cyberGif from '../assests/cb1.jpeg';
import front from '../assests/front.jpg';
import back from '../assests/back1.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 300 });
  }, []);

  return (
    <>
      {/* Google Font CDN */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet" />

      {/* Inline CSS for font and typing effect */}
      <style>{`
        .tesla-font {
          font-family: 'Orbitron', sans-serif;
        }
       
       
        .shadow-white {
          box-shadow: 0px 0px 10px white;
        }
      `}</style>

      <center>
        <div className="p-4 container-fluid bg-transparent rounded-4 w-75" id="about">

          {/* Heading */}
          <div className='container-fluid w-80 p-4 bg-transparent rounded-4 mb-5 mt-5 shadow-white'  data-aos="zoom-out" >
            <h2  className='text-white tesla-font '>Work I Can Do</h2>
        {/* White Line Divider */}
  <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
          </div>

          {/* Frontend Development */}
          <div className="row">
            <div className="col-sm-6 rounded-4 bg-transparent border border-dark p-3 shadow-white" data-aos="zoom-out">
              <div className="rounded-4 border-1 border-primary w-100 p-2 h-100 shadow-white">
                <h5 className="text-center text-white tesla-font">FRONTEND DEVELOPMENT</h5>
                 <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
                <p className="text-white text-center p-3 tesla-font" data-aos="zoom-out">
                  I can design futuristic frontends using <strong>HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, jQuery, AJAX, PHP</strong> and the best frontend library <strong>React.js</strong>.
                </p>
              </div>
            </div>
            <div className="col-sm-6 rounded-4 bg-transparent border border-dark p-3 shadow-white" data-aos="zoom-out">
              <img className="rounded-4 border-1 border-primary w-100 h-100" data-aos="zoom-out-right"
                src={front} alt="frontend" />
            </div>
          </div>

          {/* Backend Development */}
          <div className="row pb-3 mt-2">
            <div className="col-sm-6 rounded-4 bg-transparent border border-dark p-3 shadow-white" data-aos="zoom-out">
              <img className="rounded-4 border-1 border-primary w-100 h-100"
               src={back} alt="Hacker GIF" />
            </div>
            <div className="col-sm-6 rounded-4 bg-transparent border border-dark p-3 shadow-white" data-aos="zoom-out">
              <div className="rounded-4 border-1 border-primary w-100 p-2 h-100 shadow-white">
                <h5 className="text-center text-white tesla-font">BACKEND DEVELOPMENT</h5>
                 <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
                <p className="text-white p-3 text-center mt-5 tesla-font" data-aos="zoom-out">
                  Your backend will be built with <strong>Django</strong>, one of the most powerful and secure Python-based web frameworks. Hosted on trusted cloud platforms like <strong>AWS</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Cybersecurity Section */}
          <div className="row pb-3 mt-4 ">
            <div className="col-sm-6 rounded-4 bg-transparent border border-dark p-3 shadow-white" data-aos="zoom-out">
              <div className="rounded-4 border-1 border-primary w-100 h-100 p-2 shadow-white">
                <h5 className="text-center text-white tesla-font">CYBER SECURITY & PENETRATION TESTING</h5>
                 <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
                <p className="text-white p-3 text-center tesla-font" data-aos="zoom-out">
                  I specialize in <strong>penetration testing, vulnerability assessment, reconnaissance</strong> and building <strong>OSINT dashboards</strong>. Tools I use include <strong>Nmap, Burp Suite, SQLMap, theHarvester, Shodan</strong>, and more. Your digital assets will be thoroughly tested and hardened.
                </p>
              </div>
            </div>
            <div className="col-sm-6 rounded-4 bg-transparent border border-dark p-3 shadow-white" data-aos="zoom-out">
              <img className="rounded-4 border-1 border-primary w-100 h-100"
                src={cyberGif} alt="Hacker GIF" />
            </div>
          </div>

        </div>
      </center>
    </>
  );
}

export default About;