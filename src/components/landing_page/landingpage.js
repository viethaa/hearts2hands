import React from 'react';
import NewsCard from '../card/card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ColorInversionAnyParent from '../footer/footer';
import ResponsiveAppBar from '../navbar/navbar';
import { Typography } from '@mui/material';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/joy/styles';
import UserReview from '../quote/quote'
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
import './landingpage.css'




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
            title: "BVIS Christmas Fair",
            description: "Hearts2Hands recently took part in a service introduction at the British Vietnamese International School Hanoi. We presented our goals, and group’s mission as a way to raise awareness of the various problems in Vietnamese youth equity.",
            imageURL: "assets/images/santa.png",
        },
        {
            title: "Service Fair",
            description: "Hearts2Hands recently took part in an introductory event at Concordia Hanoi. Lately, we participated in the Service Fair with our own booth, where we shared our club’s mission, perspective, and goals. It was a fantastic experience",
            imageURL: "assets/images/cishservfair.jpg",
        },
        {
            title: "Bake Sale",
            description: "The Bake Sale is a special initiative organized by the fifth graders at Concordia International School Hanoi, aimed at raising awareness and support men's health issues through its signature mustache movement.",
            imageURL: "assets/images/cookies.jpg",
        }
    ];


    const myCardInfo = [
        {
            title: "Mission II",
            description: "Hearts2Hands’ second mission at Mái Ấm Thánh Tâm orphanage focuses on meeting the children’s essential needs and spreading joy through thoughtful gifts. Our goal is to bring warmth, love, hope, and smiles during the holiday season.",
            imageURL: "assets/images/mission2.jpg",
            "path": "mission2",
        },
        {
            title: "Mission I",
            description: "Hearts2Hands first mission focuses on improving education quality by providing computers to Tạ Xã 1 school in Phú Thọ, Cẩm Khê. By providing access to technology, we aim to create new educational opportunities for students here!",
            imageURL: "assets/images/h2hkidsbanner.JPG",
            "path": "mission1",
        },
        {
            title: "SDG 10",
            description: "Hearts2Hands focuses on SDG 10 because reducing inequalities is at the heart of our mission. We aim to bridge gaps in access to education, resources, opportunities,… for underprivileged young people from different communities.",
            imageURL: "assets/images/sdg10.jpg",
            "path": "sdg10",
        }
    ];

    return (
        <React.Fragment>
            <ResponsiveAppBar />
            <div class="banner">
                <div class="banner-content">
                    <Typography className="banner-name" variant="h1" sx={{
                        "fontSize":
                        {
                            "md": "6rem",
                            "xs": "4rem"
                        }
                    }}>
                        EMPOWERING<br />VIETNAM'S YOUTH
                    </Typography>
                    <Typography>"We can change the world and make it a better place. <Box sx={{ "display": { "md": "block", "xs": "inline" } }}>It is in our hands to make a difference" — Nelson Mandela</Box></Typography>
                    <div>
                        <Box sx={{
                            display: 'flex', flexWrap: 'wrap', gap: 1, "marginTop": {
                                "xs": "40px",
                                "md": "3.5rem",
                            }
                        }}>
                            <Link to="/timeline">
                                <Button
                                    endDecorator={<ArrowForwardIcon fontSize="md" />}
                                    sx={[
                                        { ...buttonStylesReadMore },
                                        { backgroundColor: "#32383E" },
                                        { '&:active': { bgcolor: shade(700), backgroundColor: "#555E68" } },
                                    ]}
                                >
                                    Timeline
                                </Button>
                            </Link>
                            <Button
                                variant="plain"
                                endDecorator={<ArrowForwardIcon fontSize="md" />}
                                sx={{ color: shade(700), ...buttonStylesJoinUs, backgroundColor: "white" }}
                                onClick={() => window.open('https://forms.gle/3smohGKzZZAU6tJb7', '_blank')}
                            >
                                Join Us Now
                            </Button>
                        </Box>
                    </div>
                </div>
            </div>
            <Fade delay={1e1}>
                <UserReview></UserReview>
                <Container className="events-container" maxWidth="lg">
                    <Link to="/timeline">
                        <p className="latest-news-p">Events</p>
                        <img className="events-icon" src="assets/images/Right Arrow Icon.png"></img>
                    </Link>
                    <Grid container spacing={4} justifyContent="center">
                        {myCardEventInfo.map((data, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box className="box-card">
                                    <Link to={data.path}>
                                        <NewsCard
                                            imageLink={data.imageURL}
                                            title={data.title}
                                            description={data.description}
                                        />
                                    </Link>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container maxWidth="lg" sx={{ my: 4 }}>
                    <Link to="/timeline">
                        <p className="latest-news-p">Latest News</p>
                        <img className="latest-news-icon" src="assets/images/Right Arrow Icon.png"></img>
                    </Link>
                    <Grid container spacing={4} justifyContent="center">
                        {myCardInfo.map((data, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box className="box-card" id="push">
                                    <Link to={data.path}>
                                        <NewsCard
                                            imageLink={data.imageURL}
                                            title={data.title}
                                            description={data.description}
                                        />
                                    </Link>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <ColorInversionAnyParent></ColorInversionAnyParent>
            </Fade>
        </React.Fragment >
    );
};

export default LandingPage;
