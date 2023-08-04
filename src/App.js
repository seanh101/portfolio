import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import About from './components/HomePage/About';
import Projects from './components/Projects/Projects';
import Project1 from './pages/Project1/Project1';
import Project2 from './pages/Project2/Project2';
import Project3 from './pages/Project3/Project3';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/project1" element={<Project1 />} />
            <Route path="/projects/project2" element={<Project2 />} />
            <Route path="/projects/project3" element={<Project3 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
