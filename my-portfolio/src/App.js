import React, { useRef } from 'react';
import StickyNavbar from './components/Navbar.js';
import AboutMe from './components/about-me.js';
import Projects from './components/projects.js';
import Skills from './components/skills.js';
import Certificates from './components/certificates.js';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <main>
      <StickyNavbar />
      <AboutMe />
      <Projects />
      <Skills />
      <Certificates />
    </main>
  );
}
