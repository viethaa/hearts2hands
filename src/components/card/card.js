import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './card.css'

export default function NewsCard({ imageLink, title, description, year, date }) {
  return (
    <div className="news-card-wrapper">
      <CardActionArea className="card-action">
        <div className="card-image-container">
          <img className="card-media" src={imageLink} alt={title} />
          <div className="card-overlay"></div>
        </div>
        <div className="card-content-wrapper">
          <div className="card-meta">
            <span className="card-date">{year}</span>
            <span className="card-dot">•</span>
            <span className="card-read">{date}</span>
          </div>
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-arrow">
            <span>Read More</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </CardActionArea>
    </div>
  );
}
