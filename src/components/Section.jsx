import React from "react";

const Section = () => {

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

  const SectionBlock = ({ title, data }) => (
    <div className="mb-5">

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 style={{ letterSpacing: "3px" }}>⚡ {title}</h2>
        <div style={{
          width: "120px",
          height: "2px",
          background: "white",
          margin: "10px auto",
          opacity: 0.5
        }} />
      </div>

      {/* Cards */}
      <div className="row">
        {data.map((item, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div
              style={cardStyle}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <div style={{ fontSize: "26px", marginBottom: "10px" }}>
                {item.icon}
              </div>

              <h5>{item.name}</h5>

              <p style={{ fontSize: "13px", opacity: 0.7 }}>
                {item.desc}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 🔥 DATA

  const languages = [
    { icon: "🐍", name: "Python", desc: "Core programming, scripting & automation." },
    { icon: "⚡", name: "JavaScript", desc: "Frontend & async web logic." },
    { icon: "🌐", name: "HTML", desc: "Structure of modern web apps." },
    { icon: "🎨", name: "CSS", desc: "Responsive and UI styling." },
    { icon: "💻", name: "C++", desc: "Low-level programming & logic." },
   
    { icon: "🖥️", name: "Bash", desc: "Linux scripting & automation." }
  ];

  const frameworks = [
    { icon: "⚛️", name: "React JS", desc: "Component-based frontend framework." },
    { icon: "🌐", name: "Django", desc: "Full-stack backend framework." },
    { icon: "🔗", name: "Django REST", desc: "API development with DRF." },
    { icon: "⚡", name: "FastAPI", desc: "High-performance API framework." },
    { icon: "🎯", name: "Bootstrap", desc: "Responsive UI framework." },
    { icon: "🎨", name: "Tailwind", desc: "Utility-first CSS framework." }
  ];

  const tools = [
    { icon: "🐉", name: "Kali Linux", desc: "Pentesting OS with security tools." },
    { icon: "🐧", name: "Ubuntu", desc: "Stable Linux dev environment." },
    { icon: "⚡", name: "Arch Linux", desc: "Custom lightweight system." },
    { icon: "☁️", name: "AWS", desc: "Cloud infrastructure platform." },
    { icon: "🚀", name: "Vercel", desc: "Frontend deployment platform." },
    { icon: "🌐", name: "Render", desc: "Backend hosting service." },
    { icon: "📡", name: "Postman", desc: "API testing tool." },
    { icon: "⚡", name: "Thunder Client", desc: "VS Code API extension." },
    { icon: "🗄️", name: "PostgreSQL", desc: "Relational database system." },
    { icon: "🍃", name: "MongoDB", desc: "NoSQL database." },
    { icon: "📋", name: "Jira", desc: "Project management tool." },
    { icon: "🐙", name: "GitHub", desc: "Version control platform." }
  ];

  return (
    <div className="container py-5 text-white">

      <SectionBlock title="LANGUAGES" data={languages} />
      <SectionBlock title="FRAMEWORKS" data={frameworks} />
      <SectionBlock title="TOOLS & PLATFORMS" data={tools} />

    </div>
  );
};

export default Section;