import * as React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ColorInversionAnyParent from '../footer/footer';
import ResponsiveAppBar from '../navbar/navbar';
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
                    <img className="news-img" src={imgURL}

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
                <div className="b2h">
                    <Link to="/">
                        <img className="back-home" src="assets/images/Left Arrow Icon.png"></img>
                        <p className="back-home-p">Back to Homepage</p>
                    </Link>
                </div>
            </Container>
            <ColorInversionAnyParent />
        </React.Fragment>
    )
}