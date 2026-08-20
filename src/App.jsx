import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AtlasSpacesDesignedToOutlastTrend from './pages/AtlasSpacesDesignedToOutlastTrend';
import AtlasPortfolioPhilosophyExtension from './pages/AtlasPortfolioPhilosophyExtension';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AtlasSpacesDesignedToOutlastTrend />} />
<Route path='/atlas-spaces-designed-to-outlast-trend' element={<AtlasSpacesDesignedToOutlastTrend />} />
<Route path='/atlas-portfolio-philosophy-extension' element={<AtlasPortfolioPhilosophyExtension />} />
        <Route path="*" element={<AtlasSpacesDesignedToOutlastTrend />} />
      </Routes>
    </BrowserRouter>
  );
}
