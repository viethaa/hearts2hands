import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
import Box from '@mui/joy/Box';
import { Typography } from '@mui/material';
import './event_info.css'

export default function EventInfo() {
    const eventInfo = [{
        "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mission2.jpg",
        "objectFit": "fill",
        "date": {
            "day": "16",
            "month": "DEC 2024",
        },

        "subtitle": "Mission II: Joy For Young Hearts",
        "description": "December 16th, 2024, we had a great time vistiting Mái Ấm Thánh Tâm orphanage! Hearts2Hands’ second mission at Mái Ấm Thánh Tâm orphanage highlights providing the children’s essential needs and spreading joy through thoughtful gifts. We aim to support their lives in any way possible before Christmas, as a way to bring warmth",
        "hashtag1": "#mission",
        "hashtag2": "#joy",
        "hashtag3": "#gifts",
    },
    {
        "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/visit.jpg",
        "objectFit": "cover",
        "date": {
            "day": "14",
            "month": "DEC 2024",
        },

        "subtitle": "Mái Ấm Thánh Tâm Visit",
        "description": "December 14th, 2024, to prepare for Mission II, we visited the orphanage Mái Ấm Thánh Tâm; where we spent time with the children and residents. This visit allowed us to better understand their needs and challenges, as we work towards creating a positive impact and supporting the community in meaningful ways.",
        "hashtag1": "#visit",
        "hashtag2": "#scouting",
        "hashtag3": "#orphange",
    },
    {
        "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/santa.png",
        "objectFit": "fill",
        "date": {
            "day": "12",
            "month": "DEC 2024",
        },

        "subtitle": "BVIS Christmas Fair",
        "description": "December 12th, 2024, Hearts2Hands took part in a service introduction at the British Vietnamese International School Hanoi Christmas fair. We presented our goals, perspective, and group’s mission as a way to both raise awareness of the various problems we aim to address through our missions and to inspire others to join us in creating meaningful change.",
        "hashtag1": "#xmas-fair",
        "hashtag2": "#bvis",
        "hashtag3": "#festive",
    },
    {
        "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/cishservfair.jpg",
        "objectFit": "cover",
        "date": {
            "day": "16",
            "month": "OCT 2024",
        },

        "subtitle": "Service Fair",
        "description": "October 16th, 2024, We recently had the privilege of presenting at an introductory event at Concordia Hanoi, where we spoke directly to the high school students about our club’s mission and vision. We also participated in the Service Fair, hosting our own booth to share our goals and initiatives with the broader community",
        "hashtag1": "#concordia",
        "hashtag2": "#service-fair",
        "hashtag3": "#introductory",
    },
    {
        "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2hkidsbanner.JPG",
        "objectFit": "fill",
        "date": {
            "day": "12",
            "month": "OCT 2024",
        },

        "subtitle": "Mission I: Education for Young People",
        "description": "October 12th, 2024, Hearts2Hands first mission focuses on improving education quality by providing computers to Tạ Xã 1 school in Phú Thọ, Cẩm Khê. By providing access to technology, we aim to create new educational opportunities for students here! We are committed to continuing our mission and expanding our impact",
        "hashtag1": "#mission",
        "hashtag2": "#education",
        "hashtag3": "#donation",
    },
    {
        "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2hfoundation.jpg",
        "date": {
            "day": "20",
            "month": "AUG 2024",
        },

        "subtitle": "Hearts2Hands Foundation",
        "objectFit": "fill",
        "description": "August 20th, 2024, Hearts2Hands was founded with the goal of supporting Vietnamese young people, aligning with the objectives of SDG 10. Founded on the belief that collective action creates change, we focus on leadership, creativity, and social responsibility. Join us to make a difference and help shape a brighter future!",
        "hashtag1": "#foundation",
        "hashtag2": "#youth-equity",
        "hashtag3": "#sdg10",
    },
    ]
    return (
        <Container maxWidth="lg">
            {eventInfo.map((info) => {
                return (
                    <div>
                        <Fade delay={1e0}>
                            <Box
                                component="img"
                                className="event-img"
                                src={info.imglink}
                                alt="Event"
                                sx={{
                                    "height": "36rem",
                                    "width": "100%",
                                    maxHeight: { "xs": "20rem", "md": "40rem" },
                                    maxWidth: { "xs": "100%", "md": "100%" },
                                    objectFit: info.objectFit || "cover",
                                }}
                            />
                            <Grid className="event-container" container spacing={1}>
                                <Grid item xs={0} sm={2.4} sx={{ display: { xs: 'none', md: 'block' } }}>
                                    <h1 className="date">{info.date.day}</h1>
                                    <p className="month">{info.date.month}</p>
                                </Grid>
                                <Grid className="event-info" item xs={12} sm={9.6}>
                                    <h1 className="sub-title">{info.subtitle}</h1>
                                    <p className="text">
                                        {info.description} </p>
                                    <div className="hashtags">
                                        <p>{info.hashtag1}</p>
                                        <p>{info.hashtag2}</p>
                                        <p>{info.hashtag3}</p>
                                    </div>
                                </Grid>
                            </Grid>
                        </Fade>
                    </div>)
            })}
            <div className="link-arrows">
                <Link to="/">
                    <div className="b2h">
                        <img className="back-home" src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/Left+Arrow+Icon.png"></img>
                        <Typography className="back-home-p" sx={{
                            "fontSize": { xs: "14px", md: "1.2rem" },
                        }}>Back to Homepage</Typography>
                    </div>
                </Link>
                <Link to="/photogallery">
                    <div className="to-photoGallery">
                        <img className="to-photoGallery-arrow" src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/Right+Arrow+Icon.png"></img>
                        <Typography className="to-photoGallery-p" sx={{
                            "fontSize": { xs: "14px", md: "1.2rem" },
                        }}>View Photo Gallery</Typography>
                    </div>
                </Link>
            </div>
        </Container >
    )
}
