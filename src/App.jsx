//import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Qualifications from './components/Qualifications/Qualifications'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Intro/>
       <Qualifications/>
       <Skills/>
       <Projects/>
       <Contact/>
    </>
  )
}

export default App
