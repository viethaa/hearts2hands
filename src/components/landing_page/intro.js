import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MediaRatio from '../card/join_card'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Intro = () => {
    return (
        <Container maxWidth="xl">
            <Grid container style={{ height: "500px" }}>
                <Grid item xs={6} style={{ height: "100%" }}>
                    <MediaRatio />
                </Grid>
                <Grid item xs={6} style={{ padding: "30px", height: "100%" }}>
                    <Grid container sx={{ height: "100%", justifyContent: 'space-around' }}>
                        <Grid item xs={12}>
                            <Typography variant='h4' style={{ marginBottom: "10px" }}>Student-Led Committee</Typography>
                            <Typography variant='p'>Hearts2Hands is a student-led committee dedicated to empowering Vietnamese young people through impactful campaigns. Join us in making a difference!</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">JOIN NOW</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Intro
