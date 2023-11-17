import { Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Programs from './pages/Programs';
import About from './pages/About';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="programs" element={<Programs />} />
      <Route path="about" element={<About />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
