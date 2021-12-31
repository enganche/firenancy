import Display from './components/Display';
import Interest from './components/Interest';
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
            <li><a>Rate</a></li>
            <li><Link to="/">Exchange</Link></li>
            <li><Link to="/interest">Interest</Link></li>
            <li><a>About</a></li>
          </ul>   
        </nav>
          <Routes>
            <Route path="/" element={<Display />} />
            <Route path="interest" element={<Interest />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;