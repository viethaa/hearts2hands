import React from 'react';
import ButtonAppBar from '../navbar/navbar';
import NewsCard from '../card/card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Intro from './intro';
import ColorInversionMarketing from '../aboutus/aboutus';
import ColorInversionAnyParent from '../footer/footer';
import { Box, Typography } from '@mui/material';
import './landingpage.css'

const LandingPage = () => {
    const myCardInfo = [
        {
            title: "Service Fair",
            description: "We recently took part in an introductory event at Concordia Hanoi. Yesterday, we participated in the Service Fair with our own booth, where we shared our club’s mission. We had a fantastic experience!",
            imageURL: "/assets/images/serv_fair.png",
        },
        {
            title: "Mission I",
            description: "Hearts2Hands first mission focuses on improving education quality by providing computers to Tạ Xã 1 school in Phú Thọ, Cẩm Khê. By providing access to technology, we aim to create new educational opportunities for students here! Join us in making a difference!",
            imageURL: "/assets/images/school.jpg",
        },
        {
            title: "This Is Hearts2Hands",
            description: "Hearts2Hands is a student-led committee dedicated to empowering Vietnamese young people through impactful campaigns. Join us in making a difference!",
            imageURL: "/assets/images/postcard.jpg",
        }
    ];

    return (
        <React.Fragment>
            
            <div class="banner">
                <div class="banner-content">
                    <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                        EMPOWERING<br />YOUNG PEOPLE
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div class="banner-buttons">
                        <a href="#" class="button">About Us</a>
                        <a href="#" class="button">Join Now</a>
                    </div>
                </div>
            </div>
            <Intro />
            <ColorInversionMarketing />
            <Container maxWidth="xl" sx={{ my: 4 }}>
                <Typography variant="h3" align="center" gutterBottom>
                    Welcome to Hearts2Hands
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                    Join us in making a difference!
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {myCardInfo.map((data, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box className = "box-card">
                                <NewsCard
                                    imageLink={data.imageURL}
                                    title={data.title}
                                    description={data.description}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <ColorInversionAnyParent></ColorInversionAnyParent>
        </React.Fragment>
    );
};

export default LandingPage;
