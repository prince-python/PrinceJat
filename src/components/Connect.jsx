import React, { useRef, useEffect } from "react";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Connect = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const Card = ({ icon, label, link, delay }) => {
    const ref = useRef(null);

    return (
      <div
        className="col-md-4 mb-4"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div
          ref={ref}
          className="glow-card text-center"
          onMouseMove={(e) => handleMouseMove(e, ref)}
        >
          <a href={link} target="_blank" rel="noreferrer">
            <div className="icon">{icon}</div>
          </a>

          <h5 className="mt-3">{label}</h5>
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
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 0 12px rgba(255,255,255,0.25);
          transition: 0.3s;
          overflow: hidden;
        }

        /* 🔥 Pulse */
        .glow-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          animation: pulse 3s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 10px rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 25px rgba(255,255,255,0.4); }
          100% { box-shadow: 0 0 10px rgba(255,255,255,0.1); }
        }

        /* 🎯 Mouse glow */
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
          box-shadow: 0 0 30px rgba(255,255,255,0.8);
        }

        .icon {
          font-size: 3rem;
          color: white;
          transition: 0.3s;
        }

        .glow-card:hover .icon {
          transform: scale(1.2);
        }

      `}</style>

      <div className="container py-5 text-white" id="social">

        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 style={{ letterSpacing: "4px" }}>
            🔗 CONNECT WITH ME
          </h2>
          <div style={{
            width: "140px",
            height: "2px",
            background: "white",
            margin: "10px auto",
            opacity: 0.5
          }} />
        </div>

        {/* Cards */}
        <div className="row">
          <Card
            icon={<FaYoutube />}
            label="YouTube"
            link="https://www.youtube.com/channel/UCyUGNzzEY0xYyWux5aPOGow"
            delay={0}
          />
          <Card
            icon={<FaGithub />}
            label="GitHub"
            link="https://github.com/prince-python"
            delay={100}
          />
          <Card
            icon={<FaLinkedin />}
            label="LinkedIn"
            link="https://www.linkedin.com/in/prince-chaudhary-253b36350/"
            delay={200}
          />
        </div>

      </div>
    </>
  );
};

export default Connect;