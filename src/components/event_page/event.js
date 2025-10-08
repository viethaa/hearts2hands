import React from 'react';
import ResponsiveAppBar from '../navbar/navbar';
import ColorInversionAnyParent from '../footer/footer';
import Banner from '../banner/banner'
import EventInfo from '../event_info/event_info'
import './event.css'

export default function EventPage() {
    return (
        <React.Fragment>
            <div className="event-page-wrapper">
                <ResponsiveAppBar />
                <br />
                <br />
                <br />
                <Banner />
                <br />
                <EventInfo />
                <br />
                <br />
            </div>
            <ColorInversionAnyParent />
        </React.Fragment>
    )
}