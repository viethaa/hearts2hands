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
    title: '1',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/2.jpg',
    title: '2',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/3.jpg',
    title: '3',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/4.jpg',
    title: '4',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/5.jpg',
    title: '5',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/6.jpg',
    title: '6',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/7.jpg',
    title: '7',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/8.jpg',
    title: '8',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/9.jpg',
    title: '9',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/10.jpg',
    title: '10',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/11.jpg',
    title: '11',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/12.jpg',
    title: '12',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/13.jpg',
    title: '13',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/14.jpg',
    title: '14',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/15.jpg',
    title: '15',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/16.jpg',
    title: '16',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/17.jpg',
    title: '17',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/18.jpg',
    title: '18',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/19.jpg',
    title: '19',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/20.jpg',
    title: '20',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/21.jpg',
    title: '21',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/22.jpg',
    title: '22',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/23.jpg',
    title: '23',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/24.jpg',
    title: '24',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/25.jpg',
    title: '25',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/26.jpg',
    title: '26',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/27.jpg',
    title: '27',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/28.jpg',
    title: '28',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/29.jpg',
    title: '29',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/30.jpg',
    title: '30',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/31.jpg',
    title: '31',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/32.jpg',
    title: '32',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/33.jpg',
    title: '33',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/34.jpg',
    title: '34',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/35.jpg',
    title: '35',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/36.jpg',
    title: '36',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/37.jpg',
    title: '37',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/38.jpg',
    title: '38',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/39.jpg',
    title: '39',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/40.jpg',
    title: '40',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/41.jpg',
    title: '41',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/42.jpg',
    title: '42',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/43.jpg',
    title: '43',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/44.jpg',
    title: '44',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/45.jpg',
    title: '45',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/46.jpg',
    title: '46',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/47.jpg',
    title: '47',
  },
  {
    img: 'https://hearts2hands.s3.ap-southeast-2.amazonaws.com/photo_gallery/48.jpg',
    title: '48',
  },
];
