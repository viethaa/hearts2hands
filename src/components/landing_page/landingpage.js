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

  const myCardEventInfo = [
    {
      title: "Mission III",
      description: "Our third mission focuses on enhancing the wellbeing of children by improving the facilities and accommodations available in Mái Ấm Thánh Tâm’s playground.  Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mission3.jpg",
      path: "mission3",
    },
    {
      title: "Mission II",
      description: "Hearts2Hands’ second mission at Mái Ấm Thánh Tâm orphanage focuses on the children’s essential needs and spreading joy through gifts. Our goal is to bring warmth, love, hope, and smiles during the holiday season. Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mission2.jpg",
      path: "mission2",
    },
    {
      title: "Mission I",
      description: "Hearts2Hands first mission focuses on improving education quality by providing computers to Tạ Xã 1 school in Phú Thọ, Cẩm Khê. By providing access to technology, we aim to create new educational opportunities! Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2hkidsbanner.JPG",
      path: "mission1",
    },
    {
      title: "BVIS Chrismas Fair",
      description: "Hearts2Hands recently took part in the British Vietnamese International School Hanoi christmas fair. We presented our goals, and group’s mission as a way to raise awareness for Vietnamese youth equity. Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/santa.png",
      path: "bvis-xmas-fair"
    },
    {
      title: "Service Fair",
      description: "Hearts2Hands recently took part in an introductory event at Concordia Hanoi. We participated in the Service Fair with our own booth, where we shared our club’s mission, perspective, and goals. Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/cishservfair.jpg",
      path: "service-fair"
    },
    {
      title: "Bake Sale",
      description: "Ivan, a member of the Hearts2Hands committee, is hosting an online Bake Sale to showcase her homemade treats. This event aims to raise funds to support our missions in the future! Come support us! Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/bakesale_cookies.png",
      path: "bakesale"
    }
  ];

  const myCardInfo = [
    {
      title: "Vietnamese National Day",
      description: "On Vietnamese National Day, September 2nd, Hearts2Hands would like to extend our deepest gratitude to our beloved homeland Vietnam, the land that has nurtured and protected generations of Vietnamese people! Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/sdg10.jpg",
      path: "sdg10",
    },
    {
      title: "2024 Recap",
      description: "Hearts2Hands focuses on SDG 10. Reducing inequalities is the heart of our mission. We aim to bridge gaps in access to education, resources, opportunities for underprivileged young Vietnamese children! Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/sdg10.jpg",
      path: "sdg10",
    },
    {
      title: "SDG 10",
      description: "Hearts2Hands focuses on SDG 10. Reducing inequalities is the heart of our mission. We aim to bridge gaps in access to education, resources, opportunities for underprivileged young Vietnamese children! Read more...",
      imageURL: "https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/sdg10.jpg",
      path: "sdg10",
    }

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
            <span className="typewriter-text">Hearts<span style={{ color: '#ff6b6b', margin: '0 0.1em' }}>♥</span>Hands</span>
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

        <Container className="events-container" maxWidth="lg">
          <p className="latest-news-p">Latest Events</p>
          <img
            className="events-icon"
            src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/Right+Arrow+Icon.png"
          />
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
          <img
            className="latest-news-icon"
            src="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/Right+Arrow+Icon.png"
          />
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

        <ColorInversionAnyParent />
      </Fade>
    </React.Fragment>
  );
};

export default LandingPage;
