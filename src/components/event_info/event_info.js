import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Fade } from "react-awesome-reveal";
import './event_info.css'

export default function EventInfo() {
    const eventInfo = [{
        "imglink": "assets/images/cish_xmas.jpg",
        "date": {
            "day": "02",
            "month": "DEC",
        },

        "subtitle": "Christmas Fair",
        "description": "We are excited to announce that we will be hosting vibrant booths at various international schools across Hanoi! These booths will feature delicious food, as well as beautifully designed shirts. Every purchase made will directly contribute to supporting Vietnamese youth, as all of the proceeds will go towards initiatives that empower Vietnamese youth",
        "hashtag1": "#fundraise",
        "hashtag2": "#xmas",
        "hashtag3": "#festive",
    },
    {
        "imglink": "assets/images/fallbbq.jpg",
        "date": {
            "day": "30",
            "month": "NOV",
        },

        "subtitle": "Fall BBQ",
        "description": "A highly anticipated annual event hosted by Concordia International School Hanoi every November. The Fall BBQ cherished tradition serves as a wonderful opportunity to bring together the families of Concordia students in a warm and welcoming environment. We hope to see you there!",
        "hashtag1": "#family",
        "hashtag2": "#gathering",
        "hashtag3": "#bbq",
    },
    {
        "imglink": "assets/images/bakesalereal.jpg",
        "date": {
            "day": "18",
            "month": "OCT",
        },

        "subtitle": "BakeSale",
        "description": "The Bake Sale is a meaningful and heartfelt initiative organized by the dedicated fifth graders at Concordia International School Hanoi. This special event is designed not only to showcase their baking skills but also to raise awareness and generate support for mens health issues",
        "hashtag1": "#movember",
        "hashtag2": "#mustache",
        "hashtag3": "#sale",
    },
    {
        "imglink": "assets/images/serv_fair.png",
        "date": {
            "day": "16",
            "month": "OCT",
        },

        "subtitle": "Service Fair",
        "description": "We recently had the privilege of presenting at an introductory event at Concordia Hanoi, where we spoke directly to the high school students about our club’s mission and vision. We also participated in the Service Fair, hosting our own booth to share our goals and initiatives with the broader community",
        "hashtag1": "#service-fair",
        "hashtag2": "#concordia",
        "hashtag3": "#introductory",
    },
    {
        "imglink": "assets/images/school.jpg",
        "date": {
            "day": "12",
            "month": "OCT",
        },

        "subtitle": "Mission I",
        "description": "Hearts2Hands first mission focuses on improving education quality by providing computers to Tạ Xã 1 school in Phú Thọ, Cẩm Khê. By providing access to technology, we aim to create new educational opportunities for students here! We are committed to continuing our mission and expanding our impact",
        "hashtag1": "#mission",
        "hashtag2": "#community",
        "hashtag3": "#donation",
    },
    {
        "imglink": "assets/images/postcard.jpg",
        "date": {
            "day": "05",
            "month": "AUG",
        },

        "subtitle": "Hearts2Hands Foundation",
        "description": "Hearts2Hands is a student-led committee dedicated to empowering Vietnamese youth through meaningful campaigns. Founded on the belief that collective action creates change, we focus on leadership, creativity, and social responsibility. Join us to make a difference and help shape a brighter future!",
        "hashtag1": "#foundation",
        "hashtag2": "#service",
        "hashtag3": "#project",
    },
    ]
    return (
        <Container maxWidth="lg">
            {eventInfo.map((info) => {
                return (<div>
                    <Fade delay={1e1}>
                        <div>
                            <img className="event-img" src={info.imglink}></img>
                        </div>
                        <Grid className="event-container" container spacing={1}>
                            <Grid item xs={0} sm={2.4} sx={{display: { xs: 'none', md: 'block' }}}>
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
        </Container >
    )
}