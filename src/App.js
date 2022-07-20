import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/about';
import Contact from './component/Contact';
function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home />}  />
      <Route path="About" element={<About />} />

      <Route path="Contact" element={<Contact />} />

      </Route>
    </Routes>
    
    
    
    
    
    
    </>

  );
}

export default App;
