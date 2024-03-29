import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dmbw78v', 'template_1my0e4m', form.current, 'xsNe3cMYvI8m7culv')
      .then((result) => {
          alert(" message sent succesfully");
      }, (error) => {
          alert("not send sorry try again");
      });
  };

  return (
    <>
      <center>
      <div className='container-fluid row bg-transparent w-75 h-75 mb-5 p-5  ' id='contact' >
        <h1 className='shadow-lg mb-4  text-white '>Contact ME</h1>
<form ref={form} onSubmit={sendEmail}>
       <div className="form-group  rounded-5 col-12 mb-5" style={{boxShadow:"0px 0px 10px white"}}>
     
       <input defaultValue="Enter Your Name" type="text" className="form-control border-dark text-white rounded-5 bg-transparent" id="exampleFormControlInput1" name="user_name" placeholder='YOU NAME'  />
      </div>
      <div className="form-group rounded-5 col-12 mb-5" style={{boxShadow:"0px 0px 10px white"}} >
    
    <input defaultValue="Enter Your Email" type="email" name="user_email" placeholder='YOUR EMAIL' className=" border-dark form-control text-white rounded-5 bg-transparent" id="exampleFormControlInput1"  />
  </div>

  <div className="form-group rounded-5 col-12 mb-5" style={{boxShadow:"0px 0px 10px white"}} >
 
    <input defaultValue="Enter Your Message" type="text" name="message"   className="form-control  border-dark text-white rounded-5 bg-transparent" placeholder='YOUR MESSAGE' id="exampleFormControlInput1"  />
  </div>
        <input className='btn shadow-lg btn-outline-light col-12 text-white'  type="submit" value="Send"  />
</form>
    </div></center>
    </>
  );
};
export default Contact