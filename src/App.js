import React from 'react'
import About from './components/About';
import Connect from './components/Connect';
import Section from './components/Section';
import Home from './components/Home';
import Projects from './components/Projects';
import Youtube from './components/Youtube';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

const App = () => {
  const [loading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>
    {
      setloading(false)

    },4000)

  },[])
  return (
    
    
    <div>
      {loading === true?
      <Loading/>:
      <div>
      <Nav/> 
      <Home/>
    <div className='bg-primary'>
      <About/>
      <Projects/>
      <Section/>
      <Youtube/>
      <Connect/>
      </div>
      </div>
      
      }</div>
    
      
  
    
  )
}

export default App

