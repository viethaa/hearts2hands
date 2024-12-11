import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './banner.css';

export default function Banner() {
    return (
        <Container maxWidth="lg">
            <div className="search-container">
                <input type="text" className="search-bar" placeholder="Search..." />
                <img className="search-icon" src="assets/images/Search Icon.png"/>
            </div>
        </Container>
    );
}
