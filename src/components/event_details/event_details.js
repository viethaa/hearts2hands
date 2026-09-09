import * as React from 'react';
import { Link } from 'react-router';
import SiteHeader from '../navbar/navbar';
import SiteFooter from '../footer/footer';
import { allPosts, formatDate } from '../../data/posts';
import './event_details.css';

const DIVIDER = '───';

/**
 * A single mission, event or story.
 *
 * `content` is an array of paragraphs with a "───" marker separating the
 * English half from the Vietnamese half. The two halves are rendered as
 * distinct language sections rather than being flagged with country icons
 * mid-flow — a flag is a country, not a language, and gb.png sat next to
 * English text written by a Vietnamese organisation.
 */
export default function EventDetails({ slug, title, date, imgURL, content, hashtag }) {
  const meta = allPosts.find((p) => p.slug === slug);

  const dividerAt = content.indexOf(DIVIDER);
  const english = dividerAt === -1 ? content : content.slice(0, dividerAt);
  const vietnamese = dividerAt === -1 ? [] : content.slice(dividerAt + 1);

  const label = meta?.numeral ? `Mission ${meta.numeral}` : meta?.kind === 'story' ? 'Writing' : 'Event';

  // content.json titles carry their own "Mission IV:" prefix, which the eyebrow
  // above already states. Drop it so the heading isn't "Mission IV: …" under a
  // "MISSION IV" label.
  const heading = meta?.numeral
    ? title.replace(/^\s*Mission\s+[IVX]+\s*:\s*/i, '')
    : title;

  return (
    <>
      <SiteHeader />

      <main id="main" className="article">
        <header className="article__head h2h-shell">
          <p className="article__kind">{label}</p>
          <h1 className="article__title">{heading}</h1>
          <p className="h2h-dateline article__dateline">
            {meta?.place && (
              <>
                {meta.place}
                <span className="sep">·</span>
              </>
            )}
            <time dateTime={meta?.date}>{meta ? formatDate(meta.date) : date}</time>
          </p>
        </header>

        <figure className="article__figure h2h-shell">
          <img src={imgURL} alt={title} />
        </figure>

        <div className="article__body h2h-shell">
          <section className="article__lang" lang="en">
            {english.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>

          {vietnamese.length > 0 && (
            <section className="article__lang article__lang--vi" lang="vi">
              <p className="article__lang-label">Tiếng Việt</p>
              {vietnamese.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>
          )}

          {hashtag?.length > 0 && (
            <ul className="article__tags">
              {hashtag.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}

          <nav className="article__nav" aria-label="More">
            <Link className="h2h-link" to="/">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M19 12H5M11 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Home
            </Link>
            <Link className="h2h-link" to="/timeline">
              Full timeline
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
