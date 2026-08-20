import { StoreProvider } from './context/StoreContext';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AtlasSpacesDesignedToOutlastTrend from './pages/AtlasSpacesDesignedToOutlastTrend';
import AtlasPortfolioPhilosophyExtension from './pages/AtlasPortfolioPhilosophyExtension';
import AureliaWhereTheHorizonSlowsDown from './pages/AureliaWhereTheHorizonSlowsDown';
import AureliaJourneyIntoTheStillness from './pages/AureliaJourneyIntoTheStillness';
import RivrFluidAssetStreams from './pages/RivrFluidAssetStreams';
import NimbusCloudWorkspaceLandingPage from './pages/NimbusCloudWorkspaceLandingPage';
import NimbusYourFilesAlwaysInTheAir from './pages/NimbusYourFilesAlwaysInTheAir';

export default function App() {
  return (
    <BrowserRouter>
    <StoreProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
        {/* Navigation Header for Multi-Screen Stitch Pages */}
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="font-bold text-sm tracking-wide text-white capitalize">atlas</span>
          </div>
          <nav className="flex items-center space-x-2 overflow-x-auto py-1">
            <Link to="/" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Atlas Spaces Designed To Outlast Trend</Link>
            <Link to="/atlas-portfolio-philosophy-extension" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Atlas Portfolio Philosophy Extension</Link>
            <Link to="/aurelia-where-the-horizon-slows-down" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Aurelia Where The Horizon Slows Down</Link>
            <Link to="/aurelia-journey-into-the-stillness" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Aurelia Journey Into The Stillness</Link>
            <Link to="/rivr-fluid-asset-streams" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Rivr Fluid Asset Streams</Link>
            <Link to="/nimbus-cloud-workspace-landing-page" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Nimbus Cloud Workspace Landing Page</Link>
            <Link to="/nimbus-your-files-always-in-the-air" className="px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-white/10 transition">Nimbus Your Files Always In The Air</Link>
          </nav>
        </header>

        {/* Dynamic Routed Pages */}
        <main className="flex-1 w-full">
          <Routes>
          <Route path="/" element={<AtlasSpacesDesignedToOutlastTrend />} />
          <Route path="/atlas-portfolio-philosophy-extension" element={<AtlasPortfolioPhilosophyExtension />} />
          <Route path="/aurelia-where-the-horizon-slows-down" element={<AureliaWhereTheHorizonSlowsDown />} />
          <Route path="/aurelia-journey-into-the-stillness" element={<AureliaJourneyIntoTheStillness />} />
          <Route path="/rivr-fluid-asset-streams" element={<RivrFluidAssetStreams />} />
          <Route path="/nimbus-cloud-workspace-landing-page" element={<NimbusCloudWorkspaceLandingPage />} />
          <Route path="/nimbus-your-files-always-in-the-air" element={<NimbusYourFilesAlwaysInTheAir />} />
          <Route path="*" element={<AtlasSpacesDesignedToOutlastTrend />} />
          </Routes>
        </main>
      </div>
        </StoreProvider>
</BrowserRouter>
  );
}
