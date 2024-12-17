import * as React from 'react';
import PropTypes from 'prop-types';
import { applySolidInversion } from '@mui/joy/colorInversion';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import './footer.css';

function Stat({ description, value }) {
  return (
    <Box sx={{ borderLeft: 3, borderColor: 'divider', px: 2, py: 0.5 }}>
      <Typography level="h3" component="div">
        {value}
      </Typography>
      <Typography level="title-sm" textColor="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}

Stat.propTypes = {
  description: PropTypes.node,
  value: PropTypes.node,
};

export default function ColorInversionAnyParent() {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'grid',
          gridTemplateColumns: { sm: '1fr 1fr' },
          alignItems: 'center',
          rowGap: 2,
          columnGap: 8,
          p: 4,
          background: `linear-gradient(45deg, ${theme.vars.palette.neutral[800]}, ${theme.vars.palette.neutral[600]})`,
        }),
        applySolidInversion('neutral'),
      ]}
    >
      <div>
        <Typography
          level="h2"
          component="h2"
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
            mb: 2,
            textShadow: '0px 2px 4px rgba(0,0,0,0.4)'
          }}
        >
          About Us
        </Typography>
        <Typography
          level="body1"
          textColor="text.secondary"
          sx={{
            lineHeight: 1.6,
            maxWidth: '80ch',
          }}
        >
          Heart2Hands is a student-led organization for youth equality in Vietnam.
          Our mission is to empower young individuals by nurturing their talents
          and fostering a sense of community and resilience.
        </Typography>
      </div>
      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
            sm: '1fr 1fr',
          },
          gap: 3,
        }}
      >
        <Stat value="52.4M" description="VND raised" />
        <Stat value="52.4M" description="VND Khuyên Góp" />
        <Stat value="2.06K" description="Dollars raised" />
        <Stat value="2.06K" description="USD Khuyên Góp" />
      </Box>
      <div>
        <Typography
          level="body1"
          sx={{
            mb: 2,
            color: 'text.secondary',
            maxWidth: '60ch',
            lineHeight: 1.6,
            marginTop: 2,
          }}
        >
          Heart2Hands là một tổ chức do học sinh tạo lập, hướng đến sự bình đẳng của người trẻ tại Việt Nam. Sứ mệnh của Hearts2Hands là giúp đỡ các bạn trẻ bằng cách nuôi dưỡng tài năng qua những hoạt động và chiến dịch đầy ý nghĩa.
        </Typography>
        <Button variant="soft" color="primary">Follow Our Socials:</Button>
      </div>
      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridTemplateColumns: {
            xs: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
            sm: '1fr 1fr',
          },
          gap: 3,
        }}
      >
        <Stat value="15" description="Members recruited" />
        <Stat value="15" description="Thành Viên" />
        <Stat value="2" description="Missions accomplished" />
        <Stat value="2" description="Chiến Dịch Thành Công" />
      </Box>
      <div>
        <a href="https://www.instagram.com/hearts_2_hands/" target="_blank">
          <img className="footer-ig-logo" src="assets/images/ig_logo.png" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61567384587346" target="_blank">
          <img className="footer-fb-logo" src="assets/images/fb_logo.png" />
        </a>
        <a href="https://www.instagram.com/hearts_2_hands/" target="_blank">
          <img className="footer-tt-logo" src="assets/images/tiktok.png" />
        </a>
      </div>
    </Box>
  );
}
