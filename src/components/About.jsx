import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import cyberGif from "../assests/cb1.jpeg";
import front from "../assests/front.jpg";
import back from "../assests/back1.jpg";

const About = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  const Card = ({ title, desc, img, reverse }) => {
    const ref = useRef(null); // ✅ correct usage

    return (
      <div className={`row mb-5 align-items-center ${reverse ? "flex-md-row-reverse" : ""}`}>

        <div className="col-md-6 mb-3" data-aos={reverse ? "fade-left" : "fade-right"}>
          <div
            ref={ref}
            className="glow-card"
            onMouseMove={(e) => handleMouseMove(e, ref)}
          >
            <h5 className="text-center mb-3">{title}</h5>
            <p style={{ fontSize: "14px", opacity: 0.85 }}>{desc}</p>
          </div>
        </div>

        <div className="col-md-6 mb-3" data-aos={reverse ? "fade-right" : "fade-left"}>
          <img src={img} alt="section" className="img-fluid rounded-4 img-glow" />
        </div>

      </div>
    );
  };

  return (
    <>
      <style>{`

        .glow-card {
          position: relative;
          background: #000;
          border-radius: 18px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 0 12px rgba(255,255,255,0.25);
          transition: 0.3s;
          overflow: hidden;
          text-align: center;
        }

        /* Pulse */
        .glow-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          box-shadow: 0 0 20px rgba(255,255,255,0.15);
          animation: pulseGlow 3s infinite;
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 10px rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 25px rgba(255,255,255,0.4); }
          100% { box-shadow: 0 0 10px rgba(255,255,255,0.1); }
        }

        /* Mouse glow */
        .glow-card::after {
          content: "";
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%);
          top: calc(var(--y) - 100px);
          left: calc(var(--x) - 100px);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .glow-card:hover::after {
          opacity: 1;
        }

        .glow-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 30px rgba(255,255,255,0.7);
        }

        .img-glow {
          box-shadow: 0 0 10px rgba(255,255,255,0.2);
          transition: 0.3s;
        }

        .img-glow:hover {
          box-shadow: 0 0 25px white;
          transform: scale(1.03);
        }

      `}</style>

      <div className="container py-5 text-white" id="about">

        <div className="text-center mb-5" data-aos="fade-down">
          <h2 style={{ letterSpacing: "4px" }}>⚡ WHAT I CAN DO</h2>
          <div style={{
            width: "140px",
            height: "2px",
            background: "white",
            margin: "10px auto",
            opacity: 0.5
          }} />
        </div>

        <Card
          title="🎨 FRONTEND DEVELOPMENT"
          desc="Modern UI using HTML, CSS, Tailwind, Bootstrap & React."
          img={front}
        />

        <Card
          title="⚙️ BACKEND DEVELOPMENT"
          desc="Secure backend using Django & FastAPI with cloud deployment."
          img={back}
          reverse
        />

        <Card
          title="🛡️ CYBER SECURITY"
          desc="Pentesting, OSINT & vulnerability assessment using pro tools."
          img={cyberGif}
        />

      </div>
    </>
  );
};

export default About;