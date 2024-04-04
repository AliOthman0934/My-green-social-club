// App.js or your route configuration file
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import GreenSocialClub from './GreenSocialClub';
import ActivityDetailsPage from './pages/ActivityDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GreenSocialClub />} />
        <Route path="/activity/:id" element={<ActivityDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;









