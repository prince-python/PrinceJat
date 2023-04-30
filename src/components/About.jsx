import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=> {
        AOS.init({duration:300})
    }, []);
    
    return (
        
    <>
    <center><div className='p-4 container-fluid bg-primary rounded-4 w-75 ' id="about" >

    <center><div className='container-fluid p-4 bg-primary rounded rounded-4 mb-5 mt-5'  style={{boxShadow:"0px 0px 50px black"}} data-aos="fade-down ">
            <span data-aos="zoom-out-left" className='text-black '>WORK I CAN DO FOR YOU</span>
        </div></center>

 <div className="row  ">
 <div className="col-sm-6 rounded-4 bg-primary border  border-dark p-3" data-aos="zoom-out" style={{boxShadow:"0px 0px 50px black"}} >
     <div data-aos="zoom-out-right " className=" rounded-4 border-1 border-primary   w-100 h-100" style={{boxShadow:"0px 0px 50px black"}}>
         <h3 className="mb-3 shadow-lg text-center">FRONTEND DEVLOPMENT</h3>
         <p className="text-black shadow-lg text-center p-3" data-aos="zoom-out" 

         ><br></br>
         <br></br><br></br>ICAN DESIGN YOUR FRONTEND WITH THE HELP OF HTML CSS TALWIND CSS BOOTSTRAP 
         JAVA SCRIPT JQUERY AJAX AND PHP AND THE BEST OF BEST WEB LIBRARY REACT JS IF YOU ARE LOOKING FOR A FUTURESTIC DESIGNER THEN YOU ARE IN RIGHT PLACE 
         </p>
     </div>
 </div>
 <div className="col-sm-6  rounded-4 bg-primary border border-dark p-3" data-aos="zoom-out"style={{boxShadow:"0px 0px 50px black"}} >
     <img className=" rounded-4 border-1 border-primary   w-100 h-100" data-aos="zoom-out-right" src="https://res.cloudinary.com/practicaldev/image/fetch/s--NzgxrJEe--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mdvk568xm4hmk3bjfsqs.gif"
     style={{boxShadow:"0px 0px 100px black"}} alt=''/>
 </div>
 </div>
 <div className="row pb-3 mt-2">
 <div className="col-sm-6  rounded-4 bg-primary  border border-dark p-3" data-aos="zoom-out"style={{boxShadow:"0px 0px 50px black"}} >
     <img className=" rounded-4 border-1 border-primary    w-100 h-100" src="https://miro.medium.com/v2/resize:fit:1400/1*YOVHPHgA64ET719WTw0pvw.gif"
      alt=""style={{boxShadow:"0px 0px 100px black"}} />
 </div>
 <div className="col-sm-6  rounded-4 bg-primary  border border-dark p-3" data-aos="zoom-out" style={{boxShadow:"0px 0px 50px black"}}>
     <div className=" rounded-4 border-1 border-primary   w-100 h-100" style={{boxShadow:"0px 0px 50px black"}}>
         <h3 className="shadow-lg text-center">BACKEND DEVLOPMENT</h3>
         <p className="text-black p-3 shadow-lg text-center mt-5" data-aos="zoom-out" > 
         YOUR WEBSITE BACKEND WILL BE THE ONE OF THE MOST POPULAR AND SECURE AND 
         POWERFULL WEB FRAMEWORK DJANGO THAT DEVLOPED IN PYTHON IT'S THE SECUREST FRAMEWORK EVER 
         AND HOSTING WILL BE ONE OF THE MOST TRUSTED CLOUD SERVICE AMAZON WEB SERVICE AWS </p>
     </div>
 </div>
 <div className='col-12 mt-5 rounded-4 p-2'data-aos="zoom-out-right"  style={{boxShadow:"0px 0px 100px black"}}>
    <img src="https://www.wingstechsolutions.com/wp-content/uploads/2022/03/full-stack-development.gif" className='rounded-5' style={{height:"70vh",width:"100%"}} alt="" />
 </div>
 
 </div></div></center>
       </>
  )
}

export default About;
