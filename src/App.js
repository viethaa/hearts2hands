import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import LandingPage from './components/landing_page/landingpage';
import EventPage from './components/event_page/event';
import PhotoGallery from './components/photo_gallery/photo_galllery';
import EventDetails from './components/event_details/event_details';
import ScrollToTop from './components/utilities/scrolltotop';

const myContent = require('./components/event_details/content.json');

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="timeline" element={<EventPage />} />
        <Route path="photogallery" element={<PhotoGallery />} />
        {myContent.map((content) => (
          <Route
            key={content.path}
            path={content.path}
            element={
              <EventDetails
                slug={content.path}
                title={content.title}
                date={content.date}
                imgURL={content.imgURL}
                content={content.content}
                hashtag={content.hashtag}
              />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
