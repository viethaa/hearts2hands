import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './card.css'

export default function NewsCard({ imageLink, title, description }) {
  return (
    <Card className="news-card">
      <CardActionArea className="card-action">
        <CardMedia className="card-media"
          component="img"
          sx={{ height: "65%" }}
          image={imageLink}
        />
        <CardContent className="card-content" sx={{ height: "35%", fontFamily: 'Fira Sans, sans-serif' }}>
          <Typography gutterBottom variant="h5" component="div" className="title">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Fira Sans, sans-serif' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
