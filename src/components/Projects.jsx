import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {

  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const projects = [{ icon: "🎉", name: "Thematic Events", desc: "Event management website for booking, showcasing events & handling client inquiries.", tech: ["React", "UI/UX"], link: "https://thematicevents.com/" }, { icon: "👓", name: "Pooja Glasses", desc: "Business website for eyewear, frames, sunglasses, bras & decorative products.", tech: ["Frontend", "Business"], link: "https://poojaglasses.com/" }, { icon: "🏟️", name: "Indore Venue", desc: "Venue booking platform for weddings, parties & corporate events.", tech: ["Web", "Booking"], link: "http://indorevenue.com/" }, { icon: "🎧", name: "Sound Beats", desc: "Music-based UI project with modern design and animations.", tech: ["React"], link: "https://thematicevents.github.io/Sound-Beats/" }, { icon: "🏨", name: "Shri Anandam", desc: "Hotel website with premium UI and booking experience.", tech: ["React"], link: "https://thematicevents.github.io/Shri-Anandam/" }, { icon: "🛡️", name: "KaalCyberSec", desc: "Cybersecurity brand showcasing tools, services & solutions.", tech: ["React", "Security"], link: "https://kaal-1-commit.github.io/KaalCyberSec/" }, { icon: "🎲", name: "Fake Data Generator", desc: "Generate fake data using Django + Faker for testing.", tech: ["Django", "Python"], link: "https://dark-fake.vercel.app/" }, { icon: "🌦️", name: "Weather App", desc: "Live weather forecast app Django using API integration.", tech: ["Django", "API"], link: "https://live-wether-app-using-django-plaj.vercel.app/" }, { icon: "✍️", name: "Text Modder", desc: "React-based text utility for formatting and transformations.", tech: ["React"], link: "https://prince-python.github.io/TEXT-Modder/" }];
  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const Card = ({ proj, index }) => {
    const ref = useRef(null);

    return (
      <div
        className="col-md-4 mb-4"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <div
          ref={ref}
          className="glow-card text-center"
          onMouseMove={(e) => handleMouseMove(e, ref)}
          onClick={() => setActiveProject(proj)}
        >
          <div style={{ fontSize: "26px" }}>{proj.icon}</div>
          <h5>{proj.name}</h5>
          <p>{proj.desc}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`

        body {
          background: black;
        }

        /* 🌌 CYBER GRID */
        .cyber-bg {
          position: fixed;
          inset: 0;
          background: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: -1;
          animation: moveGrid 20s linear infinite;
        }

        @keyframes moveGrid {
          from { background-position: 0 0; }
          to { background-position: 100px 100px; }
        }

        .glow-card {
          position: relative;
          background: #000;
          border-radius: 18px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 0 12px rgba(255,255,255,0.25);
          cursor: pointer;
          transition: 0.3s;
        }

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

        .glow-card::after {
          content: "";
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.4), transparent);
          top: calc(var(--y) - 100px);
          left: calc(var(--x) - 100px);
          opacity: 0;
          transition: 0.3s;
        }

        .glow-card:hover::after {
          opacity: 1;
        }

        .glow-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 30px white;
        }

        /* 🔥 MODAL */
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
          color : white;
        }

        .modal-box {
          background: black;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 0 20px white;
          max-width: 400px;
          text-align: center;
        }

      `}</style>

      <div className="cyber-bg"></div>

      <div className="container py-5 text-white">

        <div className="text-center mb-5" data-aos="fade-down">
          <h2>🚀 LIVE PROJECTS</h2>
        </div>

        <div className="row">
          {projects.map((proj, i) => (
            <Card key={i} proj={proj} index={i} />
          ))}
        </div>

      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="modal-bg" onClick={() => setActiveProject(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h4>{activeProject.name}</h4>
            <p>{activeProject.details}</p>

            <a
              href={activeProject.link}
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", borderBottom: "1px solid white" }}
            >
              🔗 Visit Project
            </a>

            <br /><br />

            <button onClick={() => setActiveProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default Projects;