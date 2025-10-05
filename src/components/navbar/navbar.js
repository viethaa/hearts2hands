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
  { label: "News Page", href: "/newspage", isScroll: false },
  { label: "Photo Gallery", href: "/photogallery", isScroll: false },
  // remove or add items here
];

function ResponsiveAppBar() {
  // slider / nav state
  const containerRef = React.useRef(null);
  const itemRefs = React.useRef({});
  const [activeHref, setActiveHref] = React.useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );
  const [slider, setSlider] = React.useState({ left: 0, width: 0 });

  const updateSlider = React.useCallback(() => {
    const container = containerRef.current;
    const activeEl = itemRefs.current[activeHref];
    if (!container || !activeEl) {
      setSlider({ left: 0, width: 0 });
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const itemRect = activeEl.getBoundingClientRect();
    const left = itemRect.left - containerRect.left;
    const width = itemRect.width;
    setSlider({ left, width });
  }, [activeHref]);

  React.useEffect(() => {
    updateSlider();
    const onResize = () => updateSlider();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateSlider]);

  React.useEffect(() => {
    const onPop = () => {
      setActiveHref(window.location.pathname);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const onNavClick = (href) => {
    setActiveHref(href);
    // allow slider to animate
    setTimeout(updateSlider, 40);
  };

  // handler for scroll-type links (if you have any)
  const scrollToId = (id) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveHref(id);
      setTimeout(updateSlider, 300);
    } else {
      setActiveHref(id);
      setTimeout(updateSlider, 200);
    }
  };

  return (
    <AppBar
      id="appbar"
      position="sticky"
      sx={{ boxShadow: "none" }}
    /* the look/background comes from your navbar.css (#appbar) */
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          className="relative h-16 px-4 md:px-6 flex items-center"
        >
          {/* Left area removed VISCA badge as requested */}

          {/* Centered nav for md+ */}
          <nav
            ref={containerRef}
            className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
            style={{ transform: "translateX(-50%)" }}
          >
            {/* sliding underline */}
            <span
              className="nav-slider pointer-events-none absolute -bottom-2 h-[2px] transition-all duration-300 ease-out"
              style={{
                left: slider.left,
                width: slider.width,
              }}
            />

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
                      ref={(el) => (itemRefs.current[l.href] = el)}
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
                    ref={(el) => (itemRefs.current[l.href] = el)}
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
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
            <Link to="/">
              <CardMedia
                className="navbar-logo"
                component="img"
                sx={{ objectFit: "contain", display: { xs: "none", md: "flex" }, height: 50 }}
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
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
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
            sx={{ objectFit: "contain", display: { xs: "flex", md: "none" }, height: 30, }}
            image="https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2h_logo_no_bg.png"
            alt="Hearts2Hands logo"
          />

          {/* Mobile title */}
          <Typography
            variant="h5"
            noWrap
            component="span"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              ml: 1,
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
