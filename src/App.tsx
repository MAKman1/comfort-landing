import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Problem />
      <Solution />
      <HowItWorks />
      <Team />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
