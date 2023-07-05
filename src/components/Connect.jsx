import React from 'react'

const Projecsts = () => {
  return (
    <>
      <center><div className='p-4 container-fluid bg-black rounded-4 w-75 ' id='social' >
      <center><div className='container-fluid p-4 bg-black rounded-4 mb-5'  style={{boxShadow:"0px 0px 50px text-white"}}>
            <span data-aos="zoom-out-left" className='text-white  '>STAY CONNECTED WITH ME</span>
        </div></center>
       <div className="row  ">
 <div className="col-sm-6 rounded-4 border border-dark p-3 bg-black" data-aos="zoom-out"  style={{minHeight: "400px",boxShadow:"0px 0px 50px text-white"}}  >
     <a href="https:www.youtube.com/channel/UCyUGNzzEY0xYyWux5aPOGow"><img className="position-relative rounded-5 p-2 w-75  h-100"
      style={{boxShadow:"0px 0px 50px text-white"}}
       src="https://i.gifer.com/TDdx.gif" alt="" /></a>
     </div>
     <div className="col-sm-6 rounded-4 border border-dark bg-black p-3" data-aos="zoom-out"  style={{minHeight: "400px",boxShadow:"0px 0px 50px text-white"}}>
     <a href="https:github.com/prince-python"><img className="position-relative rounded-5 p-2 w-75  h-100" style={{boxShadow:"0px 0px 50px text-white"}}
      src="https://media0.giphy.com/media/CwTvSiWflgCGKgz5eb/giphy.gif?cid=6c09b952bzuzmxe1gt3p6l58urw9q4n8h1j85x2jt26misfr&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" /></a>
     </div>
 </div>
 <div className="row ">
     <div className="col-sm-6 bg-black rounded-4 border border-dark p-3" data-aos="zoom-out" style={{ minHeight: "400px",boxShadow:"0px 0px 50px text-white"}}>
         <a href="https:www.linkedin.com/in/prince-chaudhary-61a17b240/"><img className="position-relative rounded-5 p-2 w-75  h-100" 
         style={{boxShadow:"0px 0px 50px text-white"}}  src="data:image/png;base64,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"
          alt="" /></a>
     </div>
     <div className="col-sm-6  bg-black rounded-4 border border-dark p-3" data-aos="zoom-out" style={{ minHeight: "400px",boxShadow:"0px 0px 50px text-white"}}>
         <a href="https:www.linkedin.com/in/prince-chaudhary-61a17b240/"><img className="position-relative rounded-5 p-2 w-75  h-100" style={{boxShadow:"0px 0px 50px text-white"}}
           src="https://media.tenor.com/HJbZxDfPHbQAAAAM/marlion-twitter.gif"
          alt="" /></a>
     </div>
  
   <div
     className="container rounded-4  mt-5 bg-black  mb-5"
     data-aos="zoom-out"
     style={{ letterSpacing: "1px" ,boxShadow:"0px 0px 50px text-white" }}
   
   >
     <a className='text-white position-relative' style={{textDecoration: "none"}} href="https://drive.google.com/drive/folders/1N-StDJIWtXXxw0DyBJsBfhLJmE-2n_Ua?usp=share_link"> DOWNLOAD MY RESUME</a>
   </div>
   
</div>
</div></center>

    </>
  )
}

export default Projecsts
