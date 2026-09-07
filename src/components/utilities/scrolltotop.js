import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Resets scroll on navigation, and honours in-page hash links such as
 * /#missions coming from another route.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
