import { useState, useEffect } from 'react'
import Calculator from './components/Calculator';

import Navbar from './layouts/Navbar'
import Info from './components/Info';
import Timer from './components/Timer';
import Tap from './components/Tap'


const App = () => {
  const currentcomp = 'calculator'
  return (
    <div className="App">  
    {
    currentcomp === 'calculator' ? <Calculator/> : currentcomp === 'timer'?
    <Timer/> : currentcomp === 'info' ? <Info/> :<Tap/> 
}
  
      {/* <Navbar/>
       <Info />
      <Timer />
      <Calculator />
      <Tap />   */}
      
    </div >
  );
}

export default App;

