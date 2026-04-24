import React from "react";
import {
  FaTools, FaEye, FaBug, FaSearch, FaNetworkWired,
  FaShieldAlt, FaWifi, FaSkull
} from "react-icons/fa";

const CyberToolKit = () => {

  const tools = [
    {
      icon: <FaNetworkWired />,
      name: "Nmap",
      desc: "Scan hosts, open ports & discover vulnerabilities.",
      link: "https://nmap.org/"
    },
    {
      icon: <FaBug />,
      name: "Nikto",
      desc: "Find known vulnerabilities in web servers.",
      link: "https://github.com/sullo/nikto"
    },
    {
      icon: <FaSearch />,
      name: "theHarvester",
      desc: "Email, subdomain & OSINT data gathering tool.",
      link: "https://github.com/laramies/theHarvester"
    },
    {
      icon: <FaTools />,
      name: "Metasploit",
      desc: "Powerful exploitation and payload generation framework.",
      link: "https://www.metasploit.com/"
    },
    {
      icon: <FaEye />,
      name: "Shodan",
      desc: "Search internet-connected devices & exposed assets.",
      link: "https://www.shodan.io/"
    },
    {
      icon: <FaShieldAlt />,
      name: "Burp Suite",
      desc: "Analyze web traffic and find vulnerabilities.",
      link: "https://portswigger.net/burp"
    },
    {
      icon: <FaWifi />,
      name: "Wifite",
      desc: "Automated WiFi attack tool for WPA/WPA2.",
      link: "https://github.com/derv82/wifite"
    },
    {
      icon: <FaSkull />,
      name: "BeEF",
      desc: "Browser exploitation framework.",
      link: "https://github.com/beefproject/beef"
    },
    {
      icon: <FaEye />,
      name: "God's Eye",
      desc: "Custom OSINT tool for user information gathering.",
      link: "https://github.com/prince-python"
    }
  ];

  const cardStyle = {
    background: "#000",
    borderRadius: "18px",
    padding: "25px",
    textAlign: "center",
    height: "100%",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 0 12px rgba(255,255,255,0.25)",
    transition: "0.3s"
  };

  const hoverIn = (e) => {
    e.currentTarget.style.boxShadow = "0 0 25px rgba(255,255,255,0.8)";
    e.currentTarget.style.transform = "translateY(-6px)";
  };

  const hoverOut = (e) => {
    e.currentTarget.style.boxShadow = "0 0 12px rgba(255,255,255,0.25)";
    e.currentTarget.style.transform = "translateY(0px)";
  };

  return (
    <div className="container py-5 text-white" id="kali-tools">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 style={{ letterSpacing: "4px" }}>
          💻 CYBERSECURITY TOOLS
        </h2>
        <div style={{
          width: "140px",
          height: "2px",
          background: "white",
          margin: "10px auto",
          opacity: 0.5
        }} />
      </div>

      {/* Grid */}
      <div className="row">
        {tools.map((tool, index) => (
          <div key={index} className="col-md-4 mb-4">

            <div
              style={cardStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >

              {/* Icon */}
              <div style={{
                fontSize: "28px",
                marginBottom: "10px"
              }}>
                {tool.icon}
              </div>

              {/* Title */}
              <h5>{tool.name}</h5>

              {/* Desc */}
              <p style={{
                fontSize: "13px",
                opacity: 0.75
              }}>
                {tool.desc}
              </p>

              {/* Link */}
              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "12px",
                  textDecoration: "none",
                  borderBottom: "1px solid white"
                }}
              >
                🔗 Learn More
              </a>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default CyberToolKit;