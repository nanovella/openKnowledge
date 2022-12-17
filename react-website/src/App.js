import React from 'react';
import './App.css';
import Navbar from './components/Navbar.ln';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Editor from './pages/editor';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/editor' element={<Editor/>} />
    </Routes>
    </Router>
);
}
  
export default App;
