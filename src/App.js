import React from 'react'
import About from './components/About';
import Connect from './components/Connect';
import Section from './components/Section';
import Home from './components/Home';
import Projects from './components/Projects';
// import Youtube from './components/Youtube';
import Nav from './components/Nav';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import './App.css';


const App = () => {
  const [loading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>
    {
      setloading(false)

    },1000)

  },[])
  return (
    
    
  <div className=''>
      {loading === true?
      <Loading/>:
      <> 
      <Nav/> 
      <Home/>
    <div className=' container-fluid'>
      <About/>
      <Projects/>
      <Section/>
  
      <Connect/>
      <Contact/>
      </div>
      </>}</div>
    
      
     
    
      
  
    
  )
}

export default App

