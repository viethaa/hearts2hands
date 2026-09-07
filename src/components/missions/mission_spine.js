import React from 'react';
import { Link } from 'react-router';
import { missions, formatDate } from '../../data/posts';
import './mission_spine.css';

/**
 * The missions, hung off a single continuous rule with their numerals set on it.
 *
 * The numbering is load-bearing rather than decorative: these genuinely are
 * Missions I–IV in sequence, and the rule is what the Timeline page draws in
 * full. Listed newest first, so the numerals count down as you scroll.
 */
export default function MissionSpine() {
  return (
    <section className="spine" id="missions">
      <div className="h2h-shell">
        <div className="spine__head">
          <h2 className="spine__title">Our Recent Missions</h2>
        </div>

        <ol className="spine__list">
          {missions.map((mission) => (
            <li key={mission.slug} className="mission">
              <div className="mission__marker" aria-hidden="true">
                <span className="mission__numeral">{mission.numeral}</span>
              </div>

              <article className="mission__body">
                {/* The heading and "Read the mission" already link here with
                    real text, so this one is a mouse convenience only — kept
                    out of the tab order rather than becoming a third
                    unnamed link to the same place. */}
                <Link
                  to={`/${mission.slug}`}
                  className="mission__media"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img src={mission.image} alt="" loading="lazy" />
                </Link>

                <div className="mission__text">
                  <p className="mission__index">
                    <span className="h2h-sr">Mission </span>
                    {mission.numeral}
                  </p>
                  <h3 className="mission__title">
                    <Link to={`/${mission.slug}`}>{mission.title}</Link>
                  </h3>
                  <p className="h2h-dateline mission__dateline">
                    {mission.place}
                    <span className="sep">·</span>
                    <time dateTime={mission.date}>{formatDate(mission.date)}</time>
                  </p>
                  <p className="mission__blurb">{mission.blurb}</p>
                  <Link className="h2h-link" to={`/${mission.slug}`}>
                    Read the mission
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
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
