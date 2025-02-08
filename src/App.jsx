import './App.css'
import { NavBar } from './components/nav/index'
import { HomePage } from '../src/pages/home/index'
import HardSkills from './pages/hardskills/index'
import SoftSkills from './pages/softskills'
import Contact from './pages/contact'
import { useState, useEffect } from 'react'
import Projects from './pages/projects'

const App = () => {
  
  return (
    <>
    <NavBar/>
    <HomePage />
    <Projects />
    <HardSkills/>
    <SoftSkills/>
    <Contact/>
    </>
  );
};

export default App
