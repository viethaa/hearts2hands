import * as React from 'react';
import { Link, useLocation } from 'react-router';
import './navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Missions', href: '/#missions' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Photos', href: '/photogallery' },
];

const JOIN_FORM = 'https://forms.gle/3smohGKzZZAU6tJb7';
const LOGO =
  'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/h2h_logo_no_bg.png';

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const { pathname, hash } = useLocation();
  const panelRef = React.useRef(null);
  const toggleRef = React.useRef(null);

  const current = `${pathname}${hash}`;

  // Close the menu on route change — otherwise it stays open over the new page.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  // Escape closes, and focus returns to the toggle so keyboard users aren't
  // dropped at the top of the document.
  React.useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' && !hash : current === href || pathname === href;

  // A hash link whose location is already current produces no navigation, so
  // ScrollToTop never re-runs and the click does nothing. Scroll it here
  // instead — this is the "click Missions, scroll away, click Missions again"
  // case.
  const onNavClick = (e, href, { closeFirst = false } = {}) => {
    const [path, frag] = href.split('#');
    if (!frag) return;

    const samePlace = (path || '/') === pathname && hash === `#${frag}`;
    if (!samePlace) return;

    const el = document.getElementById(frag);
    if (!el) return;

    e.preventDefault();

    // On mobile the panel is still open at click time and collapsing it moves
    // the target, so let the close paint before scrolling.
    if (closeFirst) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      });
      return;
    }

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="site-header__bar">
        <Link to="/" className="site-header__brand" aria-label="Hearts2Hands, home">
          <img src={LOGO} alt="" width="36" height="36" />
          <span className="site-header__wordmark">
            Hearts<span className="site-header__two">2</span>Hands
          </span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`site-header__link${isActive(link.href) ? ' is-active' : ''}`}
              aria-current={isActive(link.href) ? 'page' : undefined}
              onClick={(e) => onNavClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          className="site-header__join"
          href={JOIN_FORM}
          target="_blank"
          rel="noreferrer"
        >
          Join us
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={`site-header__toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="site-header__toggle-bars" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="h2h-sr">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {/* Mobile panel. The previous navbar hid its links behind a desktop-only
          breakpoint with the toggle removed entirely, which left Timeline and
          Photos unreachable on a phone. */}
      <div
        id="mobile-nav"
        ref={panelRef}
        className={`site-header__panel${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Primary, mobile">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={`site-header__panel-link${isActive(link.href) ? ' is-active' : ''}`}
              style={{ '--i': i }}
              aria-current={isActive(link.href) ? 'page' : undefined}
              onClick={(e) => {
                setOpen(false);
                onNavClick(e, link.href, { closeFirst: true });
              }}
            >
              <span className="site-header__panel-index">
                {String(i + 1).padStart(2, '0')}
              </span>
              {link.label}
            </Link>
          ))}
          <a
            className="site-header__panel-join"
            href={JOIN_FORM}
            target="_blank"
            rel="noreferrer"
            style={{ '--i': NAV_LINKS.length }}
          >
            Join the mission
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
