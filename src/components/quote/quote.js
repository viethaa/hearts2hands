import * as React from 'react';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import './quote.css'

export default function UserReview() {
    return (
        <Container className="quote-container">
            <Grid container spacing={0} sx={{
                "height": {
                    "xs": "1000px",
                    "md": "500px"
                }
            }}>
                <Grid className="quote-grid" item xs={12} md={5} sx={{
                    "height": {
                        "xs": "50%",
                        "md": "100%"
                    }
                }}>
                    <div>
                        <img className="quote-img" src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/Quote+Icon.png"></img>
                        <Typography sx={{
                            "fontSize": {
                                "xs": "1.1rem",
                                "md": "1.3rem"
                            }
                        }} className="quote">The primary purpose of the foundation for Heart2Hands is to support and adress the needs of Vietnamese youth. This project holds significant meaning for me, as it creates a positive impact on the community.</Typography>
                    </div>
                    <Grid container className="avatar" spacing={2} sx={{ "margin-top": { "xs": "12px" } }}>
                        <Grid item xs={2}>
                            <Avatar className="quote-avatar" alt="Remy Sharp" src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/pa.jpg" />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography className="avatar-name">
                                <span className="bold-name">Phan Anh Tran</span>, founding president of the Heart2Hands committee
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={0.5}></Grid>
                <Grid item xs={12} md={6.5} sx={{
                    "height": {
                        "xs": "50%",
                        "md": "100%"
                    }, "marginTop": {
                        "xs": "15px",
                        "md": "0px"
                    }
                }}>
                    <img className="display-img1" src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/school.jpg"></img>
                </Grid>
            </Grid>
        </Container>
    )
}