import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AureliaWhereTheHorizonSlowsDown from './pages/AureliaWhereTheHorizonSlowsDown';
import AtlasSpacesDesignedToOutlastTrend from './pages/AtlasSpacesDesignedToOutlastTrend';
import AureliaJourneyIntoTheStillness from './pages/AureliaJourneyIntoTheStillness';
import RivrFluidAssetStreams from './pages/RivrFluidAssetStreams';
import AtlasPortfolioPhilosophyExtension from './pages/AtlasPortfolioPhilosophyExtension';
import NimbusCloudWorkspaceLandingPage from './pages/NimbusCloudWorkspaceLandingPage';
import NimbusYourFilesAlwaysInTheAir from './pages/NimbusYourFilesAlwaysInTheAir';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AureliaWhereTheHorizonSlowsDown />} />
<Route path='/aurelia-where-the-horizon-slows-down' element={<AureliaWhereTheHorizonSlowsDown />} />
<Route path='/atlas-spaces-designed-to-outlast-trend' element={<AtlasSpacesDesignedToOutlastTrend />} />
<Route path='/aurelia-journey-into-the-stillness' element={<AureliaJourneyIntoTheStillness />} />
<Route path='/rivr-fluid-asset-streams' element={<RivrFluidAssetStreams />} />
<Route path='/atlas-portfolio-philosophy-extension' element={<AtlasPortfolioPhilosophyExtension />} />
<Route path='/nimbus-cloud-workspace-landing-page' element={<NimbusCloudWorkspaceLandingPage />} />
<Route path='/nimbus-your-files-always-in-the-air' element={<NimbusYourFilesAlwaysInTheAir />} />
        <Route path="*" element={<AureliaWhereTheHorizonSlowsDown />} />
      </Routes>
    </BrowserRouter>
  );
}
