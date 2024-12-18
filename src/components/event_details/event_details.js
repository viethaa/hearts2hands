import * as React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ColorInversionAnyParent from '../footer/footer';
import ResponsiveAppBar from '../navbar/navbar';
import Box from '@mui/joy/Box';
import { Link } from "react-router";
import './event_details.css'

export default function EventDetails({
    title, date, imgURL, content, hashtag
}) {
    return (
        <React.Fragment>
            <ResponsiveAppBar />
            <Container maxWidth="lg">
                <div className="title-date-container">
                    <Typography variant="h4" className="news-title">
                        {title}
                    </Typography>
                    <Typography variant="body1" className="news-date">
                        {date}
                    </Typography>
                </div>
                <div>
                    <Box className="news-img"
                        component="img"
                        src={imgURL}
                        sx={{
                            height: { xs: "25rem", md: "55rem" },
                            width: "100%",
                        }}
                    />
                </div>
            </Container>
            <Container maxWidth="md">
                <div>
                    {content.map((data) => (
                        <Typography variant="body1" display="block" className="news-paragraph">
                            {data}
                        </Typography>
                    ))}
                </div>
                <div class="news-hashtags">
                    {hashtag.map((data) => (
                        <Typography>
                            {data}
                        </Typography>
                    ))}
                </div>
                <div className="link-arrows">
                    <div className="b2h">
                        <img className="back-home" src="assets/images/Left Arrow Icon.png"></img>
                        <Typography className="back-home-p" sx={{
                            "fontSize": {xs: "14px", md: "1.2rem"},
                        }}>Back to Homepage</Typography>
                    </div>
                    <div className="to-timeline">
                        <img className="to-timeline-arrow" src="/assets/images/Right Arrow Icon.png"></img>
                        <Typography className="to-timeline-p" sx={{
                            "fontSize": { xs: "14px", md: "1.2rem" },
                        }}>View Our Timeline</Typography>
                    </div>
                </div>
            </Container>
            <ColorInversionAnyParent />
        </React.Fragment>
    )
}