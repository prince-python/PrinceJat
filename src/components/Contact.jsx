import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dmbw78v',
        'template_1my0e4m',
        form.current,
        'xsNe3cMYvI8m7culv'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send. Please try again.');
        }
      );
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
      `}</style>

      <center>
        <div className='container-fluid row bg-transparent w-75 h-75 mb-5 p-5' id='contact' data-aos="zoom-out">
          <h1 className='shadow-lg mb-4 text-white tesla-font'>Contact ME</h1>
          <form ref={form} onSubmit={sendEmail} className='tesla-font'>
            <div
              className="form-group rounded-5 col-12 mb-5"
              style={{ boxShadow: '0px 0px 10px white' }}
            >
              <input
                type="text"
                name="user_name"
                placeholder='YOUR NAME'
                className="form-control border-dark text-white rounded-5 bg-transparent"
              />
            </div>
            <div 
              className="form-group rounded-5 col-12 mb-5"
              style={{ boxShadow: '0px 0px 10px white' }}
            >
              <input
                type="email"
                name="user_email"
                placeholder='YOUR EMAIL'
                className="form-control border-dark text-white rounded-5 bg-transparent"
              />
            </div>
            <div
              className="form-group rounded-5 col-12 mb-5"
              style={{ boxShadow: '0px 0px 10px white' }}
            >
              <input
                type="text"
                name="message"
                placeholder='YOUR MESSAGE'
                className="form-control border-dark text-white rounded-5 bg-transparent"
              />
            </div>
            <input
              className='btn shadow-lg btn-outline-light col-12 text-white tesla-font'
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </center>
    </>
  );
};

export default Contact;
