import React from 'react';
import './App.css';
import Aboutus from './components/aboutus';
import Btn from './components/btn';
import Navbar from './components/navbar';
import Prize from './components/prize';
import Sponcer from './components/sponcers';
import Team from './components/team';

function App() {
  return (
    <div className='font-mono'>
      <Navbar />
      <Btn />
      <Aboutus />
      <Prize />
      <Aboutus />
      <Team />
      <Sponcer />
    </div>

  );
}

export default App;
