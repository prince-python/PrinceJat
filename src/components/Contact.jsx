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
      <div className='container-fluid row bg-primary w-75 h-75 mb-5 p-5  rounded-4' style={{boxShadow:"0px 0px 50px black"}}>
        <h1 className='shadow-lg mb-4 '>Contact ME</h1>
<form ref={form} onSubmit={sendEmail}>
       <div class="form-group  rounded-5 col-12 mb-5" style={{boxShadow:"0px 0px 50px black"}}>
      <label for="exampleFormControlInput1" className='shadow-lg font-monospace '>YOUR NAME</label>
       <input type="text" class="form-control" id="exampleFormControlInput1" name="user_name"  />
      </div>
      <div class="form-group rounded-5 col-12 mb-5" style={{boxShadow:"0px 0px 50px black"}} >
    <label for="exampleFormControlInput1 " className='shadow-lg font-monospace '>YOUR EMAIL</label>
    <input type="email" name="user_email" class="form-control" id="exampleFormControlInput1"  />
  </div>

  <div class="form-group rounded-5 col-12 mb-5" style={{boxShadow:"0px 0px 50px black"}} >
    <label for="exampleFormControlInput1 " className='shadow-lg font-monospace '>YOUR MESSAGE FOR ME</label>
    <input type="text" name="message"  class="form-control" id="exampleFormControlInput1"  />
  </div>
        <input className='btn shadow-lg btn-primary col-12 text-black' type="submit" value="Send"  />
</form>
    </div></center>
    </>
  );
};
export default Contact