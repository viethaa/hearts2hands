import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
import Box from '@mui/joy/Box';
import { Typography } from '@mui/material';
import './event_info.css'

export default function EventInfo() {
  const eventInfo = [
    {
      "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mision4.jpg",
      "objectFit": "fill",
      "date": {
        "day": "16",
        "month": "Oct 2025",
      },

      "subtitle": "Mission IV: Spreading Love",
      "description": "On October 16th, Hearts2Hands visited Xóm Chạy Thận to share love and bring joy during the Mid-Autumn Festival! We were thrilled to play, give gifts, sing, and spend time with the community.",
      "hashtag1": "#mission",
      "hashtag2": "#autumn-festival",
      "hashtag3": "#gifts",
    },
    {
      "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mission3.jpg",
      "objectFit": "fill",
      "date": {
        "day": "05",
        "month": "Aug 2025",
      },

      "subtitle": "Mission III: Spreading Smiles",
      "description": "On August 5th, Hearts2Hands visited Mái Ấm Thánh Tâm to begin our third mission of improving the children’s playground. We cleaned and repainted the area, added new equipment, and created a safer, more joyful space for play. Volunteers also spent time interacting with the children through games and art activities, spreading love and connection.",
      "hashtag1": "#mission",
      "hashtag2": "#smiles",
      "hashtag3": "#community",
    },
    {
      "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/volleyball_fundraise.jpg",
      "objectFit": "fill",
      "date": {
        "day": "08",
        "month": "Feb 2025",
      },

      "subtitle": "Volleyball Fundraiser",
      "description": "On February 8th, Hearts2Hands had the opportunity to participate in a fundraising activity during Concordia Hanoi’s charity volleyball tournament, where we sold food and drinks to raise funds for our upcoming mission at Mái Ấm Thánh Tâm orphanage.",
      "hashtag1": "#volleyball",
      "hashtag2": "#fundraiser",
      "hashtag3": "#community",
    },
    {
      "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mission2.jpg",
      "objectFit": "fill",
      "date": {
        "day": "15",
        "month": "DEC 2024",
      },

      "subtitle": "Mission II: Joy For Young Hearts",
      "description": "December 15th, 2024, we had a great time vistiting Mái Ấm Thánh Tâm orphanage! Hearts2Hands’ second mission at Mái Ấm Thánh Tâm orphanage highlights providing the children’s essential needs and spreading joy through thoughtful gifts. We aim to support their lives in any way possible before Christmas, as a way to bring warmth",
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
        "day": "17",
        "month": "Oct 2024",
      },

      "subtitle": "2024 Concordia Service Fair",
      "description": "October 17th, 2024, We recently had the privilege of presenting at an introductory event at Concordia Hanoi, where we spoke directly to the high school students about our club’s mission and vision. We also participated in the Service Fair, hosting our own booth to share our goals and initiatives with the broader community",
      "hashtag1": "#concordia",
      "hashtag2": "#service-fair",
      "hashtag3": "#introductory",
    },
    {
      "imglink": "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2hkidsbanner.JPG",
      "objectFit": "fill",
      "date": {
        "day": "11",
        "month": "OCT 2024",
      },

      "subtitle": "Mission I: Education for Young People",
      "description": "October 11th, 2024, Hearts2Hands first mission focuses on improving education quality by providing computers to Tạ Xã 1 school in Phú Thọ, Cẩm Khê. By providing access to technology, we aim to create new educational opportunities for students here! We are committed to continuing our mission and expanding our impact",
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
    <div className="timeline-container">
      <div className="timeline-layout">
        {/* Left side - Event cards */}
        <div className="timeline-events">
          {eventInfo.map((info, index) => (
            <Fade direction="left" triggerOnce delay={index * 100} key={index}>
              <div className="event-card">
                <img
                  className="event-card-img"
                  src={info.imglink}
                  alt={info.subtitle}
                  style={{ objectFit: info.objectFit || "cover" }}
                />
                <div className="event-card-content">
                  <h2 className="event-card-title">{info.subtitle}</h2>
                  <p className="event-card-text">{info.description}</p>
                  <div className="event-card-hashtags">
                    <span>{info.hashtag1}</span>
                    <span>{info.hashtag2}</span>
                    <span>{info.hashtag3}</span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Right side - Timeline */}
        <div className="timeline-line-wrapper">
          {eventInfo.map((info, index) => (
            <div className="timeline-checkpoint" key={index}>
              <Fade direction="right" triggerOnce delay={index * 100}>
                <div className="checkpoint-circle">
                  <div className="checkpoint-day">{info.date.day}</div>
                  <div className="checkpoint-month">{info.date.month}</div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
