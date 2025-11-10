import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TipsPage from './pages/TipsPage';
import SchemesPage from './pages/SchemesPage';
import ReportPage from './pages/ReportPage';
import AudioLibraryPage from './pages/AudioLibraryPage';
import MorePage from './pages/MorePage';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 text-gray-800">
        <main className="pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tips" element={<TipsPage />} />
            <Route path="/schemes"element={<SchemesPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/audio-library" element={<AudioLibraryPage />} />
            <Route path="/more" element={<MorePage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </HashRouter>
  );
};

export default App;