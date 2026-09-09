import * as React from 'react';
import './img_list.css';

const S3 = 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery';
const COUNT = 48;

// 1.jpg … 48.jpg. This was 48 hand-written objects; the filenames are a plain
// sequence, so the list is derived instead.
const photos = Array.from({ length: COUNT }, (_, i) => ({
  src: `${S3}/${i + 1}.jpg`,
  n: i + 1,
}));

export default function PhotoWall() {
  return (
    <div className="wall">
      {/* The previous gallery appended ?w=164&h=164&fit=crop to each URL, which
          does nothing on plain S3 — it served 48 full-size JPEGs regardless.
          Nothing here can shrink the files, but only the first few load eagerly
          and the rest wait until they are near the viewport. */}
      <ul className="wall__grid">
        {photos.map((photo, i) => (
          <li key={photo.src} className="wall__item">
            <img
              src={photo.src}
              alt={`Hearts2Hands, photograph ${photo.n}`}
              loading={i < 4 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
