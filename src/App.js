import Home from './components/Home';
import Exchange from './components/Exchange';
import Interest from './components/Interest';
import About from './components/About';
import Footer from './components/Footer';
//import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
      <div className = 'App'>
        <BrowserRouter>
        <nav>
          <ul className='navbar'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/exchange">Exchange</Link></li>
            <li><Link to="/interest">Interest</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>   
        </nav>
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/interest" element={<Interest />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;