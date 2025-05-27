import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Navbar from './components/layout/Navbar';
import Banner from './components/sections/Banner';
import FooterSection from './components/layout/FooterSection';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Banner/>
        <AppRouter />
        <FooterSection />
      </div>
    </BrowserRouter>
  );
};

export default App;