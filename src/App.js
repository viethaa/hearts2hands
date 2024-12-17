import * as React from 'react';
import LandingPage from './components/landing_page/landingpage';
import EventPage from './components/event_page/event';
import PhotoGallery from './components/photo_gallery/photo_galllery'
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from './components/utilities/scrolltotop'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="timeline" element={<EventPage />} />
          <Route path="photogallery" element={<PhotoGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

