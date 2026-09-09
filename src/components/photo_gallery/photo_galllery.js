import * as React from 'react';
import SiteHeader from '../navbar/navbar';
import SiteFooter from '../footer/footer';
import PhotoWall from '../image_list/img_list';
import './photo_gallery.css';

export default function PhotoGallery() {
  return (
    <>
      <SiteHeader />

      <main id="main" className="gallery-page">
        <header className="gallery-head">
          <div className="h2h-shell">
            <h1 className="gallery-head__title">Our Photo Gallery</h1>
          </div>
        </header>

        <PhotoWall />
      </main>

      <SiteFooter />
    </>
  );
}
