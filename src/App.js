import * as React from 'react';
import ButtonAppBar from './components/navbar/navbar';
import NewsCard from './components/card/card'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function App() {
  return (
    <React.Fragment>
      <ButtonAppBar/>
      <Container maxWidth="lg">
      </Container>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: 'center', alignItems: "center" }}>
        <Grid item xs={3}>
          <NewsCard imageLink='https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg' />
        </Grid>
        <Grid item xs={3}>
          <NewsCard />
        </Grid>
        <Grid item xs={3}>
          <NewsCard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;

