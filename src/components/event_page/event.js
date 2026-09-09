import React from 'react';
import SiteHeader from '../navbar/navbar';
import SiteFooter from '../footer/footer';
import EventInfo from '../event_info/event_info';
import './event.css';

export default function EventPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="timeline-page">
        <header className="timeline-head">
          <div className="h2h-shell">
            <h1 className="timeline-head__title">Our Project Timeline</h1>
          </div>
        </header>

        <EventInfo />
      </main>

      <SiteFooter />
    </>
  );
}
