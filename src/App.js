import React from 'react';
import Navbar from "./component/navbar.jsx";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import Services from './pages/service.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/contact.jsx';
import Mention from './pages/mention_legal.jsx';
import Footer from "./component/footer.jsx";
import ScrollToTop from './component/scrollToUp.jsx';
import { HelmetProvider } from 'react-helmet-async';

function App() {

  
  return (
    <div className="App">
      <HelmetProvider>
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mention-legal" element={<Mention />} />
        </Routes>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
