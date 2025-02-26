import './App.css';
import {useState,useEffect} from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills'; 
import {  useRef} from "react";

function App() {
const divref=useRef(null);  
  return (
    <div ref={divref}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills /> {/* Add Skills section here */}  
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
