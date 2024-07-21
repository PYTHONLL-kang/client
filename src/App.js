import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Wait from './pages/Wait';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wait" element={<Wait />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
