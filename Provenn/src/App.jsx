import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header'
import Menu from './sections/Menu'
import About from './sections/About'
import Professional from './sections/Professional'
import { Toaster } from './components/ui/toaster'

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
      <Professional/>
      <Toaster />
    </>
  )
}

export default App
