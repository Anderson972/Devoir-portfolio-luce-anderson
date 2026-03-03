import React from 'react';
import Navbar from "./navbar.jsx";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import Services from './pages/service.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/contact.jsx';
import Mention from './pages/mention_legal.jsx';

function App() {

  
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mention-legal" element={<Mention />} />
        </Routes>
    </div>
  );
}

export default App;
