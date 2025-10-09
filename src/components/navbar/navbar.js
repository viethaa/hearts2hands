import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import "./navbar.css";
import { Link } from "react-router"; // change to "react-router-dom" if needed

// Navigation items
const navLinks = [
  { label: "Home", href: "/", isScroll: false },
  { label: "Timeline", href: "/timeline", isScroll: false },
  { label: "Photo Gallery", href: "/photogallery", isScroll: false },
  // remove or add items here
];

function ResponsiveAppBar() {
  // nav state
  const [activeHref, setActiveHref] = React.useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  React.useEffect(() => {
    const onPop = () => {
      setActiveHref(window.location.pathname);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const onNavClick = (href) => {
    setActiveHref(href);
  };

  // handler for scroll-type links (if you have any)
  const scrollToId = (id) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveHref(id);
    } else {
      setActiveHref(id);
    }
  };

  return (
    <AppBar
      id="appbar"
      position="sticky"
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent !important"
      }}
    /* the look/background comes from your navbar.css (#appbar) */
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          className="relative h-18 px-4 md:px-6 flex items-center"
        >
          {/* Left area removed VISCA badge as requested */}

          {/* Centered nav for md+ */}
          <nav
            className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
            style={{ transform: "translateX(-50%)" }}
          >

            {navLinks.map((l) => {
              const isActive = l.href === activeHref;
              if (l.isScroll) {
                return (
                  <button
                    key={l.href}
                    onClick={() => scrollToId(l.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span
                      className={[
                        "text-sm font-medium tracking-wide transition-colors cursor-pointer",
                        isActive
                          ? "text-white font-bold"
                          : "text-white/90 hover:text-white",
                      ].join(" ")}
                    >
                      {l.label}
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => onNavClick(l.href)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span
                    className={[
                      "text-sm font-medium tracking-wide transition-colors",
                      isActive ? "text-white font-bold" : "text-white/90 hover:text-white",
                    ].join(" ")}
                  >
                    {l.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Logo + title area (kept) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1.5 }}>
            <Link to="/">
              <CardMedia
                className="navbar-logo"
                component="img"
                sx={{ objectFit: "contain", display: { xs: "none", md: "flex" }, height: 45 }}
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
                  fontFamily: "'Inter', 'Segoe UI', 'system-ui', sans-serif",
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  color: "inherit",
                  textDecoration: "none",
                  letterSpacing: "0.015em",
                  lineHeight: 1.2,
                }}
              >
                Hearts2Hands
              </Typography>
            </Link>
          </Box>

          {/* Mobile left logo */}
          <CardMedia
            className="navbar-logo"
            component="img"
            sx={{ objectFit: "contain", display: { xs: "flex", md: "none" }, height: 32, }}
            image="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2h_logo_no_bg.png"
            alt="Hearts2Hands logo"
          />

          {/* Mobile title */}
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "'Inter', 'Segoe UI', 'system-ui', sans-serif",
              fontWeight: 500,
              fontSize: "1rem",
              letterSpacing: "0.015em",
              color: "inherit",
              textDecoration: "none",
              ml: 1,
              lineHeight: 1.2,
            }}
          >
            Hearts2Hands
          </Typography>

          {/* spacer to push to right if needed */}
          <Box sx={{ flexGrow: 1 }} />
          {/* removed hamburger/menu area as requested */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
