import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'; // NEW clean hamburger
import './navbar.css';
import { Link } from "react-router";

const pages = [];
const settings2 = [
  { title: "Home", link: "/" },
  { title: "Timeline", link: "/timeline" },
  { title: "Photo Gallery", link: "/photogallery" },
];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar id="appbar" position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <CardMedia
              className="navbar-logo"
              component="img"
              sx={{ objectFit: "contain", display: { xs: 'none', md: 'flex' } }}
              image="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2h_logo_no_bg.png"
              alt="Hearts2Hands logo"
            />
          </Link>

          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Hearts2Hands
            </Typography>
          </Link>

          <CardMedia
            className="navbar-logo"
            component="img"
            sx={{ objectFit: "contain", display: { xs: 'flex', md: 'none' } }}
            image="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2h_logo_no_bg.png"
            alt="Hearts2Hands logo"
          />

          <Typography
            variant="h5"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hearts2Hands
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Clean hamburger + menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open menu">
              <IconButton onClick={handleOpenUserMenu} className="menu-btn" aria-label="Open navigation">
                <MenuRoundedIcon className="menu-icon" />
              </IconButton>
            </Tooltip>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              PaperProps={{
                className: 'menu-paper',
                elevation: 0,
              }}
              sx={{ mt: '45px' }}
            >
              {settings2.map((setting) => (
                <Link to={setting.link} key={setting.title} className="menu-link">
                  <MenuItem onClick={handleCloseUserMenu} className="menu-item">
                    <Typography className="menu-item-text">{setting.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
