import React from 'react';
import ResponsiveAppBar from '../navbar/navbar';
import ColorInversionAnyParent from '../footer/footer';
import Banner from '../banner/banner'
import EventInfo from '../event_info/event_info'

export default function EventPage() {
    return (
        <React.Fragment>
            <ResponsiveAppBar />
            <br />
            <br />
            <br />
            <Banner />
            <br />
            <EventInfo />
            <br />
            <br />
            <ColorInversionAnyParent />
        </React.Fragment>
    )
}