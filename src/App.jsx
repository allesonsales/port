import './App.css'
import { NavBar } from './components/nav/index'
import { HomePage } from '../src/pages/home/index'
import HardSkills from './pages/hardskills/index'
import SoftSkills from './pages/softskills'
import Contact from './pages/contact'

const App = () => {
  return (
    <>
      <NavBar/>
      <HomePage />
      <HardSkills/>
      <SoftSkills/>
      <Contact/>
    </>
  )
}

export default App
