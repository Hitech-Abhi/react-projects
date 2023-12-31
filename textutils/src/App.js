import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      document.body.style.color = 'white'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color = '#042743'
    }
  }


  return (
  <>
  <Navbar title = "TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
  <div className="container my-3">
  <Textform heading="Enter text to analyze below" mode={mode} />
  {/* <About/> */}
  </div>
</>
);
}

export default App