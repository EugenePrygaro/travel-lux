import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Tours from './components/Tours';
import Auth from './components/Auth';
import Register from './components/Register';
import Cab from './components/Cab';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cab" element={<Cab />} />
      </Routes>
    </Router>
  );
}

export default App;
