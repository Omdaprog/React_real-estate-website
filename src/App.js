import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import  GloabalStyle  from "./globalStyles";
import { SliderData } from './data/SliderData'

function App() {
  return (
    <>
      <GloabalStyle />
      <Navbar />
      <Hero slides={SliderData}/>
    </>
  );
}

export default App;
