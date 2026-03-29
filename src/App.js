import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InstallSteps from './components/InstallSteps';
import SystemReqs from './components/SystemReqs';
import Footer from './components/Footer';
import Background from './components/Background';

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <InstallSteps />
        <SystemReqs />
      </main>
      <Footer />
    </div>
  );
}
