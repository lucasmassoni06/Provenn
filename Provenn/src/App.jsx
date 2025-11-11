import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import Menu from './sections/Menu'
import About from './sections/About'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      <Menu darkMode={darkMode}/>
      <About/>
    </>
  )
}

export default App
