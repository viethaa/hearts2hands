import * as React from 'react';
import { Link } from 'react-router';
import './footer.css';

const S3 = 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images';
const JOIN_FORM = 'https://forms.gle/3smohGKzZZAU6tJb7';

// The impact figures used to live here. They now sit directly under the hero
// (src/components/impact) where they are actually seen.
const SOCIALS = [
  { name: 'Instagram', href: 'https://www.instagram.com/hearts_2_hands/', icon: `${S3}/ig_logo.png` },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61567384587346', icon: `${S3}/fb_logo.png` },
  { name: 'TikTok', href: 'https://www.instagram.com/hearts_2_hands/', icon: `${S3}/tiktok.png` },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__body">
          <div className="site-footer__about">
            <h2 className="site-footer__heading">
              Hearts<span className="site-footer__two">2</span>Hands
            </h2>
            <p className="site-footer__text">
              Hearts2Hands is a student-led organisation for youth equality in Vietnam. Our
              mission is to empower young individuals by nurturing their talents and fostering a
              sense of community and resilience.
            </p>
            <p className="site-footer__text site-footer__text--vi" lang="vi">
              Hearts2Hands là một tổ chức do học sinh tạo lập, hướng đến sự bình đẳng của người
              trẻ tại Việt Nam. Sứ mệnh của Hearts2Hands là giúp đỡ các bạn trẻ bằng cách nuôi
              dưỡng tài năng qua những hoạt động và chiến dịch đầy ý nghĩa.
            </p>
          </div>

          <div className="site-footer__cols">
            <nav className="site-footer__col" aria-label="Footer">
              <h3 className="site-footer__col-title">Pages</h3>
              <Link to="/">Home</Link>
              <Link to="/timeline">Timeline</Link>
              <Link to="/photogallery">Photos</Link>
            </nav>

            <div className="site-footer__col">
              <h3 className="site-footer__col-title">Follow</h3>
              <ul className="site-footer__socials">
                {SOCIALS.map((social) => (
                  <li key={social.name}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      <img src={social.icon} alt="" width="18" height="18" />
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__cta">
          <p>
            We recruit throughout the year, and there is a place for anyone who wants to help.
          </p>
          <a className="h2h-button" href={JOIN_FORM} target="_blank" rel="noreferrer">
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
        </div>

        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} Ha Bach Viet. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
