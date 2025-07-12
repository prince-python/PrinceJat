import React from 'react';
import {
  FaTools, FaEye, FaBug, FaSearch, FaNetworkWired,
  FaShieldAlt, FaWifi, FaSkull
} from 'react-icons/fa';

const toolIconStyle = {
  color: '#fff',
  fontSize: '1.5rem',
  background: '#111',
  padding: '0.5rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px #aaa',
};

const CyberToolKit = () => {
  return (
    <>
      {/* Tesla Font CDN */}
      <link href="https://fonts.cdnfonts.com/css/tesla" rel="stylesheet" />

      <style>
        {`
          .tesla-font {
            font-family: 'TESLA', sans-serif;
          }
        `}
      </style>

      <center>
        <div className="container-fluid bg-transparent w-75 p-5" id="kali-tools"  data-aos="zoom-out">
          <div className="container-fluid p-4 mb-4 rounded-4" style={{ boxShadow: "0px 0px 10px white" }}>
            <h2 className="text-white tesla-font  "  data-aos="zoom-out">💻 Kali CLI Pentesting & Cybersecurity Tools</h2>
                  <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
          </div>

          <div className="row text-white tesla-font" style={{ boxShadow: "0px 0px 10px white" }}>

            {/* Nmap */}
            <div className="col-md-4 p-3" data-aos="zoom-out-left">
              <FaNetworkWired size={40}   style={toolIconStyle}
/>
              <h5 className="mt-2">Nmap - Network Scanner</h5>
                    <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p>Scan hosts, open ports & discover vulnerabilities.</p>
              <a className="text-white" href="https://nmap.org/" target="_blank" rel="noreferrer">nmap.org</a>
            </div>

            {/* Nikto */}
            <div className="col-md-4 p-3" data-aos="zoom-out">
              <FaBug size={40} style={toolIconStyle} />
              <h5 className="mt-2">Nikto - Web Scanner</h5>
                    <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p>Find known vulnerabilities in web servers with ease.</p>
              <a className="text-white" href="https://github.com/sullo/nikto" target="_blank" rel="noreferrer">GitHub</a>
            </div>

            {/* theHarvester */}
            <div className="col-md-4 p-3" data-aos="zoom-out-right">
              <FaSearch size={40} style={toolIconStyle} />
              <h5 className="mt-2">theHarvester - OSINT</h5>
                    <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p>Email, subdomain & username gathering from public sources.</p>
              <a className="text-white" href="https://github.com/laramies/theHarvester" target="_blank" rel="noreferrer">GitHub</a>
            </div>

            {/* Metasploit */}
            <div className="col-md-4 p-3" data-aos="zoom-out-left">
              <FaTools size={40} style={toolIconStyle} />
              <h5 className="mt-2">Metasploit Framework</h5>
                    <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p>Powerful exploitation and payload generation tool.</p>
              <a className="text-white" href="https://www.metasploit.com/" target="_blank" rel="noreferrer">metasploit.com</a>
            </div>

            {/* Shodan */}
            <div className="col-md-4 p-3" data-aos="zoom-out">
              <FaEye size={40}  style={toolIconStyle}/>
              <h5 className="mt-2">Shodan - Internet Scanner</h5>
                    <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p>Explore connected devices & exposed assets online.</p>
              <a className="text-white" href="https://www.shodan.io/" target="_blank" rel="noreferrer">shodan.io</a>
            </div>

            {/* Burp Suite */}
            <div className="col-md-4 p-3" data-aos="zoom-out-right">
              <FaShieldAlt size={40} style={toolIconStyle} />
              <h5 className="mt-2">Burp Suite - Web Proxy</h5>
                    <hr  style={{ 
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px',
  
  }} />
              <p>Intercept and analyze web traffic for vulnerabilities.</p>
              <a className="text-white" href="https://portswigger.net/burp" target="_blank" rel="noreferrer">portswigger.net</a>
            </div>

            {/* Wifite */}
            <div className="col-md-4 p-3" data-aos="zoom-out-left">
              <FaWifi size={40}  style={toolIconStyle}/>
              <h5 className="mt-2">Wifite - Wi-Fi Cracking Tool</h5>
                    <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p>Automated wireless attack tool for WPA/WPA2 networks.</p>
              <a className="text-white" href="https://github.com/derv82/wifite" target="_blank" rel="noreferrer">GitHub</a>
            </div>

            {/* BeEF */}
            <div className="col-md-4 p-3" data-aos="zoom-out" >
              <FaSkull size={40} style={toolIconStyle} />
              <h5 className="mt-2">BeEF - Browser Exploitation</h5>
                    <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p>Exploit web browsers to gain control over targets.</p>
              <a className="text-white" href="https://github.com/beefproject/beef" target="_blank" rel="noreferrer">GitHub</a>
            </div>

            {/* God's Eye */}
            <div className="col-md-4 p-3" data-aos="zoom-out-right">
              <FaEye size={40}  style={toolIconStyle}/>
              <h5 className="mt-2">God's Eye</h5>
                                 <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p>My tool for user info collection via email, username, etc.</p>
              <a className="text-white" href="https://github.com/prince-python" target="_blank" rel="noreferrer">GitHub Profile</a>
            </div>

          </div>
        </div>
      </center>
    </>
  );
};

export default CyberToolKit;
