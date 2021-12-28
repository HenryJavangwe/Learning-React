import './App.css';
import NavbarComponent from './components/NavbarComponent'
import Home from './components/Home'

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
        <Home/>
      </div>
    </div>
  );
}

export default App;
