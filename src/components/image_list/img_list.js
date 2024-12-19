import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function StandardImageList() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ImageList sx={{ width: '100%', height: '100%' }} cols={3} rowHeight={isSm ? 480 : 160}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Added to ensure consistency
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/1.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/2.jpg',
    title: 'Burger',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/3.jpg',
    title: 'Camera',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/4.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/5.jpg',
    title: 'Hats',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/6.jpg',
    title: 'Honey',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/7.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/8.jpg',
    title: 'Fern',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/9.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/10.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/11.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/12.jpg',
    title: 'Bike',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/13.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/14.jpg',
    title: 'Burger',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/15.jpg',
    title: 'Camera',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/16.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/17.jpg',
    title: 'Hats',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/18.jpg',
    title: 'Honey',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/19.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/20.jpg',
    title: 'Fern',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/21.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/22.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/23.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/24.jpg',
    title: 'Bike',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/25.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/26.jpg',
    title: 'Sea star',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/27.jpg',
    title: 'Bike',
  },
];
