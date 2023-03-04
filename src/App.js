import React from 'react'
import About from './components/About';
import Connect from './components/Connect';
import Section from './components/Section';
import Home from './components/Home';
import Projects from './components/Projects';
import Youtube from './components/Youtube';
import Nav from './components/Nav';


const App = () => {
  return (
    <>
      <Nav/> 
      <Home/>
      <About/>
      <Projects/>
      <Section/>
      <Youtube/>
      <Connect/>
  
    </>
  )
}

export default App

