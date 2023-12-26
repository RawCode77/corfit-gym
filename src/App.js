/* eslint-disable react/react-in-jsx-scope */
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import HelpLayout from './components/HelpLayout';
import Navbar from './components/Navbar';
import About from './pages/About';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Memories from './pages/Memories';
import NotFound from './pages/NotFound';
import Programs from './pages/Programs';
import Contact from './pages/help/Contact';
import Faq from './pages/help/Faq';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/about" element={<About />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
