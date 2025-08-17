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
    height: 48,
    px: 2.5,
    borderRadius: 999,
    fontWeight: 700,
    letterSpacing: 0.3,
    transition: 'background-color .2s ease, border-color .2s ease, transform .2s ease',
    border: '1.5px solid rgba(255,255,255,.16)',
    color: '#EAF2FF',
    backdropFilter: 'blur(4px)',
    '& .MuiButton-endDecorator': { transition: 'transform .2s ease' },
    '&:hover .MuiButton-endDecorator': { transform: 'translateX(4px)' },
    '&:active': { transform: 'translateY(1px)' },
    '&:focus-visible': { outline: 'none', boxShadow: '0 0 0 3px rgba(114,211,255,.35)' },
  };

  const btnPrimary = {
    ...buttonBase,
    width: 160,
    background: 'linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.05))',
    borderColor: 'rgba(255,255,255,.20)',
    '&:hover': {
      background: 'linear-gradient(180deg, rgba(255,255,255,.14), rgba(255,255,255,.08))',
      borderColor: 'rgba(255,255,255,.28)',
    },
  };

  const btnGhost = {
    ...buttonBase,
    backgroundColor: 'transparent',
    color: 'rgba(234,242,255,.92)',
    borderColor: 'rgba(255,255,255,.22)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,.07)',
      borderColor: 'rgba(255,255,255,.30)',
    },
  };

  const myCardEventInfo = [
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
            className="banner-name"
            variant="h1"
            sx={{ fontSize: { md: "6rem", xs: "4rem" } }}
          >
            EMPOWERING<br />VIETNAM'S YOUTH
          </Typography>

          <Typography>
            "We can change the world and make it a better place.
            <Box sx={{ display: { md: "block", xs: "inline" } }}>
              It is in our hands to make a difference" — Nelson Mandela
            </Box>
          </Typography>

          <div>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
                marginTop: { xs: "40px", md: "3.5rem" },
              }}
            >
              <Link to="/timeline">
                <Button
                  endDecorator={<ArrowForwardIcon fontSize="md" />}
                  sx={btnPrimary}
                >
                  Timeline
                </Button>
              </Link>

              <Button
                endDecorator={<ArrowForwardIcon fontSize="md" />}
                sx={btnGhost}
                onClick={() =>
                  window.open('https://forms.gle/3smohGKzZZAU6tJb7', '_blank')
                }
              >
                Join Us Now
              </Button>
            </Box>
          </div>
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
