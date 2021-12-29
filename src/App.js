import { Routes, Route } from "react-router-dom";

import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // =====================================================
  // Components are functionals or classes that return UI. 
  // =====================================================
  return (
    <div className="App">
      {/* NAVBAR FOR OUR ENTIRE APP */}
      <NavbarComponent/>

      {/* ALL CONTENT FROM OTHER PAGES WILL GO IN BELOW THIS */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* FOOTER OF THE APPLICATION */}
      <Footer/>
    </div>
  );
}

export default App;
