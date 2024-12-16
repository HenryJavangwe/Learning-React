import { Routes, Route } from "react-router-dom";

import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import Profile from "./pages/Profile/Profile";

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
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          {/* <Route path="/new-blog" element={<CreateBlog/>} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blogs/:id" element={<BlogDetails/>} /> */}
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>

      {/* FOOTER OF THE APPLICATION */}
      <Footer/>
    </div>
  );
}

export default App;
