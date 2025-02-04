import './App.css'
import { NavBar } from './components/nav/index'
import { HomePage } from '../src/pages/home/index'
import HardSkills from './pages/hardskills/index'
import SoftSkills from './pages/softskills'
import Contact from './pages/contact'
import { useState, useEffect } from 'react'

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 818);

  useEffect(() => {
    const handleResize = () => { 
      setIsMobile(window.innerWidth <= 818);
    }

    window.addEventListener('resize', handleResize);
    
    // Chamando a função uma vez para ajustar logo que o componente é montado
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <p>Prestou pra celular</p>
      ) : (
        <p>Prestou pra pc</p>
      )}
    <NavBar/>
    <HomePage />
    <HardSkills/>
    <SoftSkills/>
    <Contact/>
    </>
  );

} 
export default App
