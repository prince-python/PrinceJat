import React from 'react';

const Projects = () => {
  return (
    <>
      {/* Tesla Font */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet" />

      <style>{`
        .tesla-font {
          font-family: 'Orbitron', sans-serif;
        }
        .tag {
          display: inline-block;
          background-color: #111;
          color: #fff;
          padding: 2px 8px;
          margin: 2px;
          border-radius: 4px;
          font-size: 12px;
        }
        .shadow-white {
          box-shadow: 0px 0px 10px white;
        }
      `}</style>

      <center>
        <div className='p-4 container-fluid bg-transparent rounded-4 w-75' id="project">
          <div className='container-fluid p-4 bg-transparent rounded-4 mb-5 shadow-white'>
            <span data-aos="zoom-out-left" className='text-white bg-transparent tesla-font'>P R O J E C T S</span>
             <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
          </div>

          {/* Updated Featured Projects */}
          <div className="row">
            <div className="col-sm-6 bg-transparent p-4 rounded-4 border border-dark shadow-white" data-aos="zoom-out">
              <h4 className="text-white tesla-font">God's Eye - OSINT Dashboard</h4>
               <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p className="text-white">Open-source OSINT tool for gathering info from usernames, emails, domains using APIs.</p>
              <div><span className='tag'>Python</span><span className='tag'>Django</span><span className='tag'>OSINT</span></div>
              <a className='btn btn-outline-light mt-2' href="https://github.com/prince-python/Gods_Eye">View Repo</a>
            </div>

            <div className="col-sm-6 bg-transparent p-4 rounded-4 border border-dark shadow-white" data-aos="zoom-out">
              <h4 className="text-white tesla-font">Text Utilities - React</h4>
               <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p className="text-white">Live React app to transform and clean text. Offers case change, trimming, and more.</p>
              <div><span className='tag'>React</span><span className='tag'>JSX</span><span className='tag'>Utilities</span></div>
              <a className='btn btn-outline-light mt-2' href="https://github.com/prince-python/TEXT-UTILITIES-AND-MODIFIER-APP-USING-REACT">View Repo</a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-6 bg-transparent p-4 rounded-4 border border-dark shadow-white" data-aos="zoom-out">
              <h4 className="text-white tesla-font">School ERP Panel</h4>
               <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p className="text-white">Complete ERP system to manage school, staff, students, and academic modules.</p>
              <div><span className='tag'>Django</span><span className='tag'>ERP</span><span className='tag'>Admin</span></div>
              <a className='btn btn-outline-light mt-2' href="https://github.com/prince-python/SCHOOL-MANAGEMENT--PANEL">View Repo</a>
            </div>

            <div className="col-sm-6 bg-transparent p-4 rounded-4 border border-dark shadow-white" data-aos="zoom-out">
              <h4 className="text-white tesla-font">Tea Ecommerce Website</h4>
               <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p className="text-white">Frontend-only tea shop website with elegant layout and shopping flow.</p>
              <div><span className='tag'>HTML</span><span className='tag'>CSS</span><span className='tag'>UI/UX</span></div>
              <a className='btn btn-outline-light mt-2' href="https://github.com/prince-python/Higarden-tea-ecommerce-website-">View Repo</a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-6 bg-transparent p-4 rounded-4 border border-dark shadow-white" data-aos="zoom-out">
              <h4 className="text-white tesla-font">Fake Data Generator</h4>
               <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p className="text-white">Generate fake user records with Django faker library and export data.</p>
              <div><span className='tag'>Python</span><span className='tag'>Django</span><span className='tag'>Faker</span></div>
              <a className='btn btn-outline-light mt-2' href="https://github.com/prince-python">View Repo</a>
            </div>

            <div className="col-sm-6 bg-transparent p-4 rounded-4 border border-dark shadow-white" data-aos="zoom-out">
              <h4 className="text-white tesla-font">Live Weather App</h4>
               <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p className="text-white">Weather forecast app using Django and weather API integration.</p>
              <div><span className='tag'>Django</span><span className='tag'>API</span><span className='tag'>Weather</span></div>
              <a className='btn btn-outline-light mt-2' href="https://github.com/prince-python">View Repo</a>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-6 bg-transparent p-4 rounded-4 border border-dark shadow-white" data-aos="zoom-out">
              <h4 className="text-white tesla-font">API for College</h4>
               <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p className="text-white">REST API for managing college data like students and faculty.</p>
              <div><span className='tag'>DRF</span><span className='tag'>API</span><span className='tag'>Backend</span></div>
              <a className='btn btn-outline-light mt-2' href="https://github.com/prince-python/API-FOR-COLLEGE-USING-DRF">View Repo</a>
            </div>

            <div className="col-sm-6 bg-transparent p-4 rounded-4 border border-dark shadow-white" data-aos="zoom-out">
              <h4 className="text-white tesla-font">Basic CRUD Django App</h4>
               <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
              <p className="text-white">Simple CRUD web app for performing create, read, update, and delete.</p>
              <div><span className='tag'>Django</span><span className='tag'>CRUD</span><span className='tag'>Forms</span></div>
              <a className='btn btn-outline-light mt-2' href="https://github.com/prince-python/crud_application">View Repo</a>
            </div>
          </div>
        </div>

        {/* LIVE PROJECTS */}
        <div className='p-1 container-fluid bg-transparent rounded-4 w-75' id="about">
          <div className='container-fluid p-4 bg-transparent rounded rounded-4 mb-2 mt-5 shadow-white' data-aos="fade-down">
            <span data-aos="zoom-out-left" className='text-white tesla-font'>LIVE PROJECTS</span>
             <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
          </div>

          <div className="row bg-transparent p-5">
            <div className="col-sm-12 rounded-4 bg-transparent border border-dark mt-2 mb-2 p-3 shadow-white" data-aos="zoom-out">
              <a href="https://dark-fake.vercel.app/" className='btn btn-outline-light tesla-font'>FAKE DATA GENERATOR DJANGO</a>
            </div>
            <div className="col-sm-12 rounded-4 bg-transparent border border-dark p-3 mt-2 mb-2 shadow-white" data-aos="zoom-out">
              <a href="https://live-wether-app-using-django-plaj.vercel.app/" className=' btn btn-outline-light tesla-font'>LIVE WEATHER APP DJANGO</a>
            </div>
            <div className="col-sm-12 rounded-4 bg-transparent border border-dark p-3 mt-2 mb-2 shadow-white" data-aos="zoom-out">
              <a href=" https://prince-python.github.io/TEXT-Modder/" className=' btn btn-outline-light tesla-font'>TEXT UTILITY REACT</a>
            </div>
            <div className="col-sm-12 rounded-4 bg-transparent border border-dark p-3 mt-2 mb-2 shadow-white" data-aos="zoom-out">
              <a href=" https://princejathere.000webhostapp.com/calculator.php" className=' btn btn-outline-light tesla-font'>CALCULATOR</a>
            </div>
            <div className="col-sm-12 rounded-4 bg-transparent border border-dark p-3 mt-2 mb-2 shadow-white" data-aos="zoom-out">
              <a href="https://github.com/prince-python" className=' btn btn-outline-light tesla-font'>GITHUB</a>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Projects;
