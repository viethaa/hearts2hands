import React from 'react';
import { Link } from 'react-router';
import SiteHeader from '../navbar/navbar';
import SiteFooter from '../footer/footer';
import Vision from '../quote/quote';
import Impact from '../impact/impact';
import MissionSpine from '../missions/mission_spine';
import { events, stories, formatDate } from '../../data/posts';
import './landingpage.css';

const JOIN_FORM = 'https://forms.gle/3smohGKzZZAU6tJb7';
const HERO_IMAGE =
  'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images/mision4.jpg';

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* Hero. Type sits on paper and the photograph runs beside it at full
            brightness — the old hero put the headline over the image and needed
            a 75% black radial plus a 10px blur to stay legible. */}
        <section className="hero">
          <div className="hero__inner h2h-shell">
            <div className="hero__text">
              <h1 className="hero__title">
                Hearts<span className="hero__two">2</span>Hands
              </h1>
              <p className="hero__tagline">Youth equity in Vietnam</p>
              <p className="hero__lede">
                Hearts2Hands is a student-led organisation working for youth equity in Vietnam.
                We go to orphanages, hospitals and rural schools, we bring what is needed, and we
                write down what happened.
              </p>
              <p className="hero__lede hero__lede--vi" lang="vi">
                Hearts2Hands là một tổ chức do học sinh tạo lập, hướng đến sự bình đẳng của
                người trẻ tại Việt Nam.
              </p>
              <div className="hero__actions">
                <a className="h2h-button" href={JOIN_FORM} target="_blank" rel="noreferrer">
                  Join the mission
                  <Arrow />
                </a>
                <a className="h2h-button h2h-button--ghost" href="#missions">
                  Read the missions
                </a>
              </div>
            </div>

            <figure className="hero__figure">
              <img src={HERO_IMAGE} alt="Hearts2Hands volunteers at Xóm Chạy Thận, Hà Nội" />
              <figcaption className="h2h-dateline">
                Mission IV<span className="sep">·</span>Xóm Chạy Thận, Hà Nội
                <span className="sep">·</span>16 Oct 2025
              </figcaption>
            </figure>
          </div>
        </section>

        <Impact />

        <Vision />

        <MissionSpine />

        {/* Events — a dense dated index rather than a third identical card grid.
            Order carries meaning here, so the dates lead. */}
        <section className="events" id="events">
          <div className="h2h-shell">
            <div className="events__head">
              <h2 className="events__title">Our Events &amp; Fundraisers</h2>
              <Link className="h2h-link" to="/timeline">
                Full timeline
                <Arrow />
              </Link>
            </div>

            <ul className="events__list">
              {events.map((event) => {
                const Row = event.hasPage === false ? 'div' : Link;
                const rowProps =
                  event.hasPage === false ? {} : { to: `/${event.slug}` };

                return (
                  <li key={event.slug} className="event">
                    <Row className="event__row" {...rowProps}>
                      <time className="event__date" dateTime={event.date}>
                        {formatDate(event.date)}
                      </time>
                      <div className="event__main">
                        <h3 className="event__title">{event.title}</h3>
                        <p className="event__place">{event.place}</p>
                      </div>
                      <p className="event__blurb">{event.blurb}</p>
                      {event.hasPage === false ? (
                        <span className="event__arrow" aria-hidden="true" />
                      ) : (
                        <span className="event__arrow">
                          <Arrow />
                        </span>
                      )}
                    </Row>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Stories — written pieces, given an editorial set of three. */}
        <section className="stories" id="stories">
          <div className="h2h-shell">
            <h2 className="stories__title">Our Blog Posts</h2>

            <div className="stories__grid">
              {stories.map((story) => (
                <article key={story.slug} className="story">
                  <Link to={`/${story.slug}`} className="story__link">
                    <div className="story__media">
                      <img src={story.image} alt="" loading="lazy" />
                    </div>
                    <time className="story__date" dateTime={story.date}>
                      {formatDate(story.date)}
                    </time>
                    <h3 className="story__title">{story.title}</h3>
                    <p className="story__blurb">{story.blurb}</p>
                    <span className="h2h-link story__cta">
                      Read
                      <Arrow />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
