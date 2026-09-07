import * as React from 'react';
import './quote.css';

const S3 = 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/assets/images';

export default function Vision() {
  return (
    <section className="vision" aria-labelledby="vision-heading">
      <div className="h2h-shell vision__inner">
        <figure className="vision__figure">
          <img
            src={`${S3}/school.jpg`}
            alt="Students at Tạ Xã 1 school in Phú Thọ"
            loading="lazy"
          />
          <figcaption className="h2h-dateline">
            Tạ Xã 1 School, Phú Thọ<span className="sep">·</span>Mission I
          </figcaption>
        </figure>

        <div className="vision__body">
          <p className="h2h-eyebrow" id="vision-heading">
            Our vision
          </p>
          <blockquote className="vision__quote">
            <p>
              The primary purpose of the foundation for Hearts2Hands is to support and address
              the needs of Vietnamese youth. This project holds significant meaning for me, as it
              creates a positive impact on the community.
            </p>
          </blockquote>
          <figcaption className="vision__author">
            <img src={`${S3}/pa.jpg`} alt="" width="48" height="48" />
            <span>
              <span className="vision__name">Phan Anh Tran</span>
              <span className="vision__role">Founding President</span>
            </span>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
