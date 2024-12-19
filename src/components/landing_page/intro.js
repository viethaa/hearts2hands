import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Intro = () => {
    return (
        <Container maxWidth="xl" sx={{ marginY: 4 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Left Image Section */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="img"
                        src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/hearts2hands_pic.jpg"
                        alt="A beautiful landscape"
                        sx={{
                            borderRadius: 2,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            boxShadow: 3,
                        }}
                    />
                </Grid>

                {/* Right Content Section */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            height: '100%',
                        }}
                    >
                        <Typography variant="h4" gutterBottom>
                            Student-Led Committee
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Hearts2Hands is a student-led committee dedicated to empowering
                            Vietnamese young people through impactful campaigns. Join us in
                            making a difference!
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Intro;
