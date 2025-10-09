import * as React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import './quote.css'

export default function UserReview() {
    return (
        <div className="quote-wrapper">
            <Container className="quote-container" maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={5} className="quote-image-section">
                        <div className="image-frame">
                            <img className="display-img1" src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/school.jpg" alt="School"></img>
                            <div className="image-overlay"></div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <div className="quote-content">
                            <div className="quote-header">
                                <span className="quote-label">Our Vision</span>
                            </div>
                            <Typography className="quote-text">
                                "The primary purpose of the foundation for Heart2Hands is to support and address the needs of Vietnamese youth. This project holds significant meaning for me, as it creates a positive impact on the community"
                            </Typography>
                            <div className="quote-author">
                                <Avatar
                                    className="quote-avatar"
                                    alt="Phan Anh Tran"
                                    src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/pa.jpg"
                                />
                                <div className="author-info">
                                    <div className="author-name">Phan Anh Tran</div>
                                    <div className="author-title">Founding President</div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
