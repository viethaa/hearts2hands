import * as React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import './quote.css'

export default function UserReview2() {
    return (
        <Container className="quote-container">
            <Grid container spacing={2}>
                <Grid item xs={6} sx={{"height": "480px"}}>
                    <img className="display-img1" src="assets/images/postcard.jpg"></img>
                </Grid>
                <Grid className="quote-grid" item xs={6} sx={{"height": "480px"}}>
                    <div>
                        <img className="quote-img" src="assets/images/Quote Icon.png"></img>
                        <p className="quote">The primary purpose of the foundation for Heart2Hands is to support and adress the needs of Vietnamese youth. This project holds significant meaning for me, as it creates a positive impact on the community</p>
                    </div>
                    <Grid container className="avatar" spacing={2}>
                        <Grid item xs={2}>
                            <Avatar className="quote-avatar" alt="Remy Sharp" src="assets/images/pa.jpg" />
                        </Grid>
                        <Grid item xs={10}>
                            <p className="avatar-name">
                                <span className="bold-name">Phan Anh Tran</span>, founding president of the Heart2Hands committee
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
