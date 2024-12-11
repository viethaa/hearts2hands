import React from 'react';
import NewsCard from '../card/card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Intro from './intro';
import ColorInversionMarketing from '../aboutus/aboutus';
import ColorInversionAnyParent from '../footer/footer';
import { Typography } from '@mui/material';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/joy/styles';
import './landingpage.css'
import UserReview from '../quote/quote'
import ResponsiveAppBar from '../navbar/navbar';
import { Fade } from "react-awesome-reveal";




const LandingPage = () => {
    const buttonStylesReadMore = {
        width: "150px",
        height: "50px",
        borderRadius: 99,
        '&:hover': {
            '& .MuiButton-endDecorator': { transform: 'translate(4px, 0px)' },
            backgroundColor: "#555E68",
        },
        '& span': { transition: '0.15s' },
    };

    const buttonStylesJoinUs = {
        borderRadius: 99,
        '&:hover': {
            '& .MuiButton-endDecorator': { transform: 'translate(4px, 0px)' },
        },
        '& span': { transition: '0.15s' },
    };

    const buttonStylesJoinUsNow = {
        borderRadius: 99,
        '&:hover': {
            '& .MuiButton-endDecorator': { transform: 'translate(4px, 0px)' },
        },
        '& span': { transition: '0.15s' },
    };

    const theme = useTheme();
    const shade = (x) => theme.vars.palette['neutral'][x];

    const myCardEventInfo = [
        {
            title: "Christmas Fair",
            description: "We will be hosting booths at various international schools across Hanoi. At these booths, we will be offering a selection of delicious food and beautifully designed shirts, with all proceeds going towards Vietnamese youth!",
            imageURL: "assets/images/cish_xmas.jpg",
        },
        {
            title: "Fall BBQ",
            description: "The Fall BBQ is a highly anticipated annual event hosted by Concordia International School Hanoi every November. This cherished tradition serves as a wonderful opportunity to bring together the families of Concordia students in a warm and welcoming environment.",
            imageURL: "assets/images/fallbbq.jpg",
        },
        {
            title: "Bake Sale",
            description: "The Bake Sale is a special initiative organized by the fifth graders at Concordia International School Hanoi, aimed at raising awareness and support men's health issues through its signature mustache movement.",
            imageURL: "assets/images/bakesalereal.jpg",
        }
    ];


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
            <ResponsiveAppBar />
            <div class="banner">
                <div class="banner-content">
                    <h1>
                        EMPOWERING<br />VIETNAM'S YOUTH
                    </h1>
                    <p>"We can change the world and make it a better place.<br />It is in our hands to make a difference" — Nelson Mandela</p>
                    <div>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            <Button
                                endDecorator={<ArrowForwardIcon fontSize="md" />}
                                sx={[
                                    { ...buttonStylesReadMore },
                                    { backgroundColor: "#32383E" },
                                    { '&:active': { bgcolor: shade(700), backgroundColor: "#555E68" } },
                                ]}
                            >
                                Read more
                            </Button>
                            <Button
                                variant="plain"
                                endDecorator={<ArrowForwardIcon fontSize="md" />}
                                sx={{ color: shade(700), ...buttonStylesJoinUs, backgroundColor: "white" }}
                            >
                                Join Us Now
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
            <Fade delay={1e2}>
                <UserReview></UserReview>
                <Container className="events-container" maxWidth="lg" sx={{ my: 4 }}>
                    <p className="latest-news-p">Events</p>
                    <img className="events-icon" src="assets/images/Right Arrow Icon.png"></img>
                    <Grid container spacing={4} justifyContent="center">
                        {myCardEventInfo.map((data, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box className="box-card">
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
                <Container maxWidth="lg" sx={{ my: 4 }}>
                    <p className="latest-news-p">Latest News</p>
                    <img className="latest-news-icon" src="assets/images/Right Arrow Icon.png"></img>
                    <Grid container spacing={4} justifyContent="center">
                        {myCardInfo.map((data, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box className="box-card">
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
            </Fade>
        </React.Fragment>
    );
};

export default LandingPage;
