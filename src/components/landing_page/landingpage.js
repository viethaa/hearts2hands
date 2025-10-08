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
// import { useTheme } from '@mui/joy/styles'; // removed (no longer used)
import UserReview from '../quote/quote';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
import './landingpage.css';

const LandingPage = () => {
  const buttonBase = {
    height: 58,
    px: 4,
    borderRadius: 999,
    fontWeight: 600,
    fontSize: '1.1rem',
    letterSpacing: 0.2,
    minWidth: 190,
    transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1.5px solid rgba(255,255,255,.2)',
    color: '#ffffff',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    '& .MuiButton-endDecorator': { transition: 'transform .3s ease' },
    '&:hover .MuiButton-endDecorator': { transform: 'translateX(4px)' },
    '&:active': { transform: 'scale(0.98)' },
    '&:focus-visible': { outline: 'none', boxShadow: '0 0 0 3px rgba(114,211,255,.4)' },
  };

  const btnPrimary = {
    ...buttonBase,
    background: 'linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.12))',
    borderColor: 'rgba(255,255,255,.3)',
    boxShadow: '0 4px 16px rgba(0,0,0,.15)',
    '&:hover': {
      background: 'linear-gradient(135deg, rgba(255,255,255,.25), rgba(255,255,255,.18))',
      borderColor: 'rgba(255,255,255,.4)',
      boxShadow: '0 6px 20px rgba(0,0,0,.2)',
      transform: 'translateY(-2px)',
    },
  };

  const btnGhost = {
    ...buttonBase,
    backgroundColor: 'rgba(255,255,255,.05)',
    borderColor: 'rgba(255,255,255,.25)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,.12)',
      borderColor: 'rgba(255,255,255,.35)',
      transform: 'translateY(-2px)',
    },
  };

  const myMissionsInfo = [
    {
      title: "Mission IV: Spreading Love",
      description: "Mission IV took place at Xóm Chạy Thận, where we spent time with the community, organized meaningful activities, and decorated a joyful festival environment for underprivileged patients.  Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mision4.jpg",
      path: "mission3",
      year: "2025",
      date: "Oct 6"
    },
    {
      title: "Mission III: Spreading Smiles",
      description: "Our third mission focuses on enhancing the wellbeing of children by improving the facilities and accommodations available in Mái Ấm Thánh Tâm's playground.  Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mission3.jpg",
      path: "mission3",
      year: "2025",
      date: "Aug 15"
    },
    {
      title: "Mission II: Joy for Young Hearts",
      description: "Hearts2Hands' second mission at Mái Ấm Thánh Tâm orphanage focuses on the children's essential needs and spreading joy through gifts. Our goal is to bring warmth, love, hope, and smiles during the holiday season. Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mission2.jpg",
      path: "mission2",
      year: "2024",
      date: "Dec 15"
    },
    {
      title: "Mission I: Pathways to E-Education",
      description: "Hearts2Hands first mission focuses on improving education quality by providing computers to Tạ Xã 1 school in Phú Thọ, Cẩm Khê. By providing access to technology, we aim to create new educational opportunities! Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2hkidsbanner.JPG",
      path: "mission1",
      year: "2024",
      date: "Oct 11"
    }
  ];

  const myEventsInfo = [
    {
      title: "Volleyball Fundraising",
      description: "On February 8th, Hearts2Hands had the opportunity to participate in a fundraising activity during Concordia Hanoi’s charity volleyball tournament. Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/volleyball_fundraise.jpg",
      path: "bvis-xmas-fair",
      year: "2025",
      date: "Feb 10"
    },
    {
      title: "BVIS Chrismas Fair",
      description: "Hearts2Hands recently took part in the British Vietnamese International School Hanoi christmas fair. We presented our goals, and group's mission as a way to raise awareness for Vietnamese youth equity. Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/santa.png",
      path: "bvis-xmas-fair",
      year: "2024",
      date: "Dec 12"
    },
    {
      title: "Service Fair",
      description: "Hearts2Hands recently took part in an introductory event at Concordia Hanoi. We participated in the Service Fair with our own booth, where we shared our club's mission, perspective, and goals. Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/cishservfair.jpg",
      path: "service-fair",
      year: "2024",
      date: "Oct 16"
    },
    // {
    //   title: "Bake Sale",
    //   description: "Ivan, a member of the Hearts2Hands committee, is hosting an online Bake Sale to showcase her homemade treats. This event aims to raise funds to support our missions in the future! Come support us! Read more...",
    //   imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/bakesale_cookies.png",
    //   path: "bakesale",
    //   year: "2024",
    //   date: "Dec 24"
    // }
  ];

  const myCardInfo = [
    {
      title: "The Story of Mái Ấm Thánh Tâm",
      description: "Mái Ấm Thánh Tâm is a charitable home dedicated to caring for orphaned, abandoned, or underprivileged children. Operated by Catholic nuns and volunteers, the shelter provides a safe and nurturing environment",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/maiamthanhtam_story.png",
      path: "sdg10",
      year: "2024",
      date: "Dec 31"
    },
    {
      title: "2024 Recap",
      description: "Lets look back at 2024, and all the missions and achievements we have accomplished!",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2hfoundation.jpg",
      path: "sdg10",
      year: "2024",
      date: "Dec 31"
    },

  ];

  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <div
        className="banner"
        style={{
          backgroundImage:
            "url('https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/bannerCollege.png')"
        }}
      >
        <div className="banner-content">
          <Typography
            className="banner-title"
            variant="h1"
            sx={{
              fontSize: { md: "9rem", xs: "4.5rem" },
              textAlign: 'center',
              mb: 6
            }}
          >
            <span className="typewriter-text">Hearts<span style={{ color: '#ff6b6b', margin: '0 0.1em', position: 'relative', display: 'inline-block' }}>♥<span style={{ position: 'absolute', top: '53%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '0.25em', color: '#ffffff', fontWeight: 900 }}>2</span></span>Hands</span>
          </Typography>

          <Box
            className="banner-buttons-fade-in"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              justifyContent: 'center',
            }}
          >
            <Link to="/timeline">
              <Button
                endDecorator={<ArrowForwardIcon fontSize="md" />}
                sx={btnPrimary}
              >
                Our Timeline
              </Button>
            </Link>

            <Button
              endDecorator={<ArrowForwardIcon fontSize="md" />}
              sx={btnGhost}
              onClick={() =>
                window.open('https://forms.gle/3smohGKzZZAU6tJb7', '_blank')
              }
            >
              Join the Mission
            </Button>
          </Box>
        </div>
      </div>

      <Fade delay={1e1}>
        <UserReview />

        <div className="missions-container">
          <Container maxWidth="lg">
            <div style={{ textAlign: 'center' }}>
              <h2 className="latest-news-p">Our Missions</h2>
            </div>
            <Grid container spacing={4} justifyContent="center">
              {myMissionsInfo.map((data, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Link to={data.path} style={{ textDecoration: 'none' }}>
                    <NewsCard
                      imageLink={data.imageURL}
                      title={data.title}
                      description={data.description}
                      year={data.year}
                      date={data.date}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>

        <div className="events-container">
          <Container maxWidth="lg">
            <div style={{ textAlign: 'center' }}>
              <h2 className="latest-news-p">Events</h2>
            </div>
            <Grid container spacing={4} justifyContent="center">
              {myEventsInfo.map((data, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Link to={data.path} style={{ textDecoration: 'none' }}>
                    <NewsCard
                      imageLink={data.imageURL}
                      title={data.title}
                      description={data.description}
                      year={data.year}
                      date={data.date}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>

        <div className="news-section">
          <Container maxWidth="lg">
            <div style={{ textAlign: 'center' }}>
              <h2 className="latest-news-p">Blog Posts</h2>
            </div>
            <Grid container spacing={4} justifyContent="center">
              {myCardInfo.map((data, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Link to={data.path} style={{ textDecoration: 'none' }}>
                    <NewsCard
                      imageLink={data.imageURL}
                      title={data.title}
                      description={data.description}
                      year={data.year}
                      date={data.date}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>

        <ColorInversionAnyParent />
      </Fade>
    </React.Fragment>
  );
};

export default LandingPage;
