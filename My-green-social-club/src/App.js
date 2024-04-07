import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataContextProvider } from './components/DataContext/DataContext';
import GreenSocialClub from './GreenSocialClub';
import ActivityDetailsPage from './pages/ActivityDetailsPage';
import RigesterForEvent from './components/RigesterForEvent';

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
          <Routes>
            <Route path="/" element={<GreenSocialClub />} />
            <Route path="/activity/:id" element={<ActivityDetailsPage />} />
            <Route path="/activity/Rigester" element={<RigesterForEvent />} />
          </Routes>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;









