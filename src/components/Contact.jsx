import React, { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);

    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      message: formData.get("message")
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyL_gNbUU9Pq3IlFdATITejRHmAkKzF6ZOeZuV21ilni5x2rhM8yrxl9FzI3LFj_SKv/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      form.current.reset();

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (error) {
      alert("❌ Failed to send");
    }

    setLoading(false);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .tesla-font {
          font-family: 'Orbitron', sans-serif;
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        /* SUCCESS POPUP */
        .success-overlay {
          position: fixed;
          inset: 0;
          backdrop-filter: blur(8px);
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .success-box {
          background: #000;
          padding: 30px 50px;
          border-radius: 12px;
          box-shadow: 0 0 25px #00ff88;
          color: #00ff88;
          font-size: 20px;
          font-weight: bold;
          animation: popup 0.3s ease;
        }

        @keyframes popup {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

      <center>
        <div
          className='container-fluid row bg-transparent w-75 h-75 mb-5 p-5'
          id='contact'
          data-aos="zoom-out"
        >
          <h1 className='shadow-lg mb-4 text-white tesla-font'>
            Contact ME
          </h1>

          <form ref={form} onSubmit={sendData} className='tesla-font'>

            {/* NAME */}
            <div
              className="form-group rounded-5 col-12 mb-5"
              style={{ boxShadow: '0px 0px 10px white' }}
            >
              <input
                type="text"
                name="user_name"
                placeholder='YOUR NAME'
                className="form-control border-dark text-white rounded-5 bg-transparent"
                required
              />
            </div>

            {/* EMAIL */}
            <div
              className="form-group rounded-5 col-12 mb-5"
              style={{ boxShadow: '0px 0px 10px white' }}
            >
              <input
                type="email"
                name="user_email"
                placeholder='YOUR EMAIL'
                className="form-control border-dark text-white rounded-5 bg-transparent"
                required
              />
            </div>

            {/* MESSAGE */}
            <div
              className="form-group rounded-5 col-12 mb-5"
              style={{ boxShadow: '0px 0px 10px white' }}
            >
              <input
                type="text"
                name="message"
                placeholder='YOUR MESSAGE'
                className="form-control border-dark text-white rounded-5 bg-transparent"
                required
              />
            </div>

            {/* BUTTON */}
            <button
              className='btn shadow-lg btn-outline-light col-12 text-white tesla-font'
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>

          </form>
        </div>
      </center>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="success-overlay">
          <div className="success-box">
            ✅ Message Sent Successfully
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;