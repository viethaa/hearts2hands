import * as React from 'react';
import { Link } from 'react-router';
import { allPosts, splitDate, linkTo } from '../../data/posts';
import './event_info.css';

const KIND_LABEL = {
  mission: 'Mission',
  event: 'Event',
  story: 'Writing',
};

/**
 * The full record, every entry in one column against a single rule.
 *
 * Data comes from src/data/posts.js. It used to be a second hardcoded copy of
 * the landing page's arrays, which is how Mission IV ended up dated Oct 6 here
 * and Oct 16 on the timeline.
 */
export default function EventInfo() {
  let lastYear = null;

  return (
    <div className="record">
      <ol className="record__list">
        {allPosts.map((post) => {
          const { day, month, year } = splitDate(post.date);
          const href = linkTo(post);
          const showYear = year !== lastYear;
          lastYear = year;

          const Body = href ? Link : 'div';
          const bodyProps = href ? { to: href } : {};

          return (
            <React.Fragment key={post.slug}>
              {showYear && (
                <li className="record__year" aria-hidden="true">
                  <span>{year}</span>
                </li>
              )}

              <li className={`record__item record__item--${post.kind}`}>
                <div className="record__marker">
                  <time className="record__date" dateTime={post.date}>
                    <span className="record__day">{day}</span>
                    <span className="record__month">{month}</span>
                  </time>
                </div>

                <Body className="record__body" {...bodyProps}>
                  <div className="record__media">
                    <img src={post.image} alt="" loading="lazy" />
                  </div>

                  <div className="record__text">
                    <p className="record__kind">
                      {post.numeral
                        ? `${KIND_LABEL[post.kind]} ${post.numeral}`
                        : KIND_LABEL[post.kind]}
                    </p>
                    <h2 className="record__title">{post.title}</h2>
                    <p className="record__place">{post.place}</p>
                    <p className="record__blurb">{post.blurb}</p>
                    <ul className="record__tags">
                      {post.tags.map((tag) => (
                        <li key={tag}>#{tag}</li>
                      ))}
                    </ul>
                  </div>
                </Body>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
}
