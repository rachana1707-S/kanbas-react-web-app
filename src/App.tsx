import Labs from "./Labs";
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Kanbas from "./Kanbas";
import LandingPage from './LandingPage/LandingPage';

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* Set LandingPage as the default route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
