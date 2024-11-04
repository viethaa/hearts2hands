import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import './intro.css'

const Intro = () => {
    return (
        <Container maxWidth="xl">
            <Grid container style={{ height: "350px" }}>
                <Grid item xs={6} style={{ height: "100%" }}>
                    <AspectRatio sx={{ height: '100%', borderRadius: 'xl'}} objectFit = 'cover' >
                        <img
                            src="/assets/images/hearts2hands_pic.jpg"
                            alt="A beautiful landscape."
                        />
                    </AspectRatio>
                </Grid>
                <Grid item xs={6} style={{ padding: "30px", height: "100%" }}>
                    <Grid container sx={{ height: "100%", justifyContent: 'space-around' }}>
                        <Grid item xs={12}>
                            <Typography variant='h4' style={{ marginBottom: "10px" }}>Student-Led Committee</Typography>
                            <Typography variant='p'>Hearts2Hands is a student-led committee dedicated to empowering Vietnamese young people through impactful campaigns. Join us in making a difference!</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button className = "joinBtn" variant="contained">JOIN NOW</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Intro
