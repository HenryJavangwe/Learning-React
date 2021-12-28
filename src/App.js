import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import About from './components/About';
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
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>

      {/* FOOTER OF THE APPLICATION */}
      <Footer/>
    </div>
  );
}

export default App;
