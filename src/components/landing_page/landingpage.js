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
            title: "BVIS Chrismas Fair",
            description: "Hearts2Hands recently took part in a service introduction at the British Vietnamese International School Hanoi. We presented our goals, and group’s mission as a way to raise awareness for Vietnamese youth equity.",
            imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/santa.png",
            "path": "bvis-xmas-fair"
        },
        {
            title: "Service Fair",
            description: "Hearts2Hands recently took part in an introductory event at Concordia Hanoi. Lately, we participated in the Service Fair with our own booth, where we shared our club’s mission, perspective, and goals.",
            imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/cishservfair.jpg",
            "path": "service-fair"
        },
        {
            title: "Bake Sale",
            description: "The Bake Sale is a special initiative organized by the fifth graders at Concordia International School Hanoi, aimed at raising awareness and support men's health issues through its signature mustache movement.",
            imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/cookies.jpg",
        }
    ];


    const myCardInfo = [
        {
            title: "Mission II",
            description: "Hearts2Hands’ second mission at Mái Ấm Thánh Tâm orphanage focuses on meeting the children’s essential needs and spreading joy through thoughtful gifts. Our goal is to bring warmth, love, hope, and smiles during the holiday season.",
            imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mission2.jpg",
            "path": "mission2",
        },
        {
            title: "Mission I",
            description: "Hearts2Hands first mission focuses on improving education quality by providing computers to Tạ Xã 1 school in Phú Thọ, Cẩm Khê. By providing access to technology, we aim to create new educational opportunities for students here!",
            imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2hkidsbanner.JPG",
            "path": "mission1",
        },
        {
            title: "SDG 10",
            description: "Hearts2Hands focuses on SDG 10 because reducing inequalities is at the heart of our mission. We aim to bridge gaps in access to education, resources, opportunities for underprivileged young Vietnamese children",
            imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/sdg10.jpg",
            "path": "sdg10",
        }
    ];

    return (
        <React.Fragment>
            <ResponsiveAppBar />
            <div class="banner" style={{
                "backgroundImage": "url('https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/bannerCollege.png')"
            }}>
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
                                        { border: '3px solid rgba(0, 0, 0, 1)', }
                                    ]}
                                >
                                    Timeline
                                </Button>
                            </Link>
                            <Button
                                variant="plain"
                                endDecorator={<ArrowForwardIcon fontSize="md" />}
                                sx={{ color: shade(700), ...buttonStylesJoinUs, backgroundColor: "white", border: '3px solid rgba(0, 0, 0, 1)', }}
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
                    <p className="latest-news-p">Latest Events</p>
                    <img className="events-icon" src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/Right+Arrow+Icon.png"></img>
                    <Grid container spacing={4} justifyContent="center">
                        {myCardEventInfo.map((data, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box className="box-card">
                                    <Link to={data.path}>
                                        <NewsCard
                                            className="news-card-content"
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
                    <p className="latest-news-p">Latest News</p>
                    <img className="latest-news-icon" src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/Right+Arrow+Icon.png"></img>
                    <Grid container spacing={4} justifyContent="center">
                        {myCardInfo.map((data, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Box className="box-card" id="push">
                                    <Link to={data.path}>
                                        <NewsCard
                                            className="news-card-content"
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
