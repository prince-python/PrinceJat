import React from 'react';

const Section = () => {
  return (
    <>
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
          margin: 4px 2px;
          border-radius: 4px;
          font-size: 11px;
        }
      `}</style>

      <center>
       
        <div className="container-fluid bg-transparent rounded-4 text-white w-75 p-5">
                <div className='container-fluid p-4 bg-transparent rounded-4 mb-2  shadow-white'>
            <span data-aos="zoom-out-left" className='text-white bg-transparent tesla-font'>LANGUAGES AND KNOWLEDGE</span>
             <hr style={{
    width: '200px',
    height: '3px',
    backgroundColor: 'white',
    margin: '10px auto',
    border: 'none',
    borderRadius: '4px'
  }} />
          </div>

          <div className="container-fluid" id="s" data-aos="zoom-out">
           

            <div className="row mt-3 rounded-4 p-4" style={{boxShadow:"0px 0px 10px white"}}>
              <div className="col-lg-4 col-md-6 col-sm-6 border bg-transparent rounded border-dark" style={{boxShadow:"0px 0px 10px white"}}>
                <div className="counter__item mt-3 mb-3 mb-3">
                  <h2 className="counter_num text-white tesla-font" data-aos="zoom-out-left">80</h2>
                  <p className='text-white tesla-font' data-aos="zoom-out-left">PYTHON KNOWLEDGE</p>
                  <span className='tag'>Core</span><span className='tag'>OOP</span><span className='tag'>Scripting</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 border bg-transparent rounded-4 border-dark" style={{boxShadow:"0px 0px 10px white"}}>
                <div className="counter__item mt-3 mb-3">
                  <h2 className="counter_num text-white tesla-font" data-aos="zoom-out-left">70</h2>
                  <p className='text-white tesla-font' data-aos="zoom-out-left">SQL KNOWLEDGE</p>
                  <span className='tag'>MySQL</span><span className='tag'>Joins</span><span className='tag'>Querying</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 border bg-transparent rounded-4 border-dark ml-1" style={{boxShadow:"0px 0px 10px white"}}>
                <div className="counter__item mt-3 mb-3">
                  <h2 className="counter_num text-white tesla-font" data-aos="zoom-out-right">82</h2>
                  <p className='text-white tesla-font' data-aos="zoom-out-right">JAVASCRIPT</p>
                  <span className='tag'>DOM</span><span className='tag'>ES6</span><span className='tag'>AJAX</span>
                </div>
              </div>

              <div className='container-fluid p-1 bg-transparent rounded-4 mt-4 mb-4' style={{boxShadow:"0px 0px 10px white"}}>
                <span data-aos="zoom-out-left" className='text-white tesla-font'>FRAMEWORK-</span>
                <span data-aos="zoom-out-right" className='text-white tesla-font'>KNOWLEDGE</span>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 border bg-transparent rounded-4 border-dark ml-1" style={{boxShadow:"0px 0px 10px white"}}>
                <div className="counter__item mt-3 mb-3">
                  <h2 className="counter_num text-white tesla-font" data-aos="zoom-out">82</h2>
                  <p className='text-white tesla-font' data-aos="zoom-out-right">DJANGO-KNOWLEDGE</p>
                  <span className='tag'>ORM</span><span className='tag'>REST</span><span className='tag'>Security</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 border bg-transparent rounded-4 border-dark ml-1" style={{boxShadow:"0px 0px 10px white"}}>
                <div className="counter__item mt-3 mb-3">
                  <h2 className="counter_num text-white tesla-font" data-aos="zoom-out">60</h2>
                  <p className='text-white tesla-font' data-aos="zoom-out-right">REACT-JS</p>
                  <span className='tag'>Hooks</span><span className='tag'>Components</span><span className='tag'>JSX</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 border bg-transparent rounded-4 border-dark ml-1" style={{boxShadow:"0px 0px 10px white"}}>
                <div className="counter__item mt-3 mb-3">
                  <h2 className="counter_num text-white tesla-font" data-aos="zoom-out">40</h2>
                  <p className='text-white tesla-font' data-aos="zoom-out-right">ANDROID STUDIO</p>
                  <span className='tag'>Java</span><span className='tag'>XML</span><span className='tag'>UI</span>
                </div>
              </div>

              <div className='container-fluid p-1 bg-transparent rounded-4 mt-4 mb-4' style={{boxShadow:"0px 0px 10px white"}}>
                <span data-aos="zoom-out-left" className='text-white tesla-font'>DEPLOYING-</span>
                <span data-aos="zoom-out-right" className='text-white tesla-font'>KNOWLEDGE</span>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 border bg-transparent rounded-4 border-dark" style={{boxShadow:"0px 0px 10px white"}}>
                <div className="counter__item mt-3 mb-3">
                  <h2 className="counter_num text-white tesla-font" data-aos="zoom-out-left">70</h2>
                  <p className='text-white tesla-font' data-aos="zoom-out-left">AWS</p>
                  <span className='tag'>EC2</span><span className='tag'>Hosting</span><span className='tag'>S3</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 border bg-transparent rounded-4 border-dark" style={{boxShadow:"0px 0px 10px white"}}>
                <div className="counter__item mt-3 mb-3">
                  <h2 className="counter_num text-white tesla-font" data-aos="zoom-out-left">80</h2>
                  <p className='text-white tesla-font' data-aos="zoom-out-left">VERCEL</p>
                  <span className='tag'>React</span><span className='tag'>Django</span><span className='tag'>Live Hosting</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 border bg-transparent rounded-4 border-dark" style={{boxShadow:"0px 0px 10px white"}}>
                <div className="counter__item mt-3 mb-3">
                  <h2 className="counter_num text-white tesla-font" data-aos="zoom-out-left">80</h2>
                  <p className='text-white tesla-font' data-aos="zoom-out-left">RENDER</p>
                  <span className='tag'>Gunicorn</span><span className='tag'>Python</span><span className='tag'>Cloud</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Section;

