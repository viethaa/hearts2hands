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
      <ButtonAppBar />
      <Container maxWidth="xl">
        <Grid container sx={{ justifyContent: 'center', alignItems: "center" }}>
          <Grid item lg={4}>
            <NewsCard imageLink='https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg' title="Service Fair" description="Hearts2Hands recently took part in an introductory event at Concordia Hanoi. Yesterday, we participiated in the service fair with our own booth, where we shared our club's mission. We had a fantastic experience!" />
          </Grid>
          <Grid item lg={4}>
            <NewsCard imageLink='https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg' title="abc" description="Hearts2Hands recently took part in an introductory event at Concordia Hanoi. Yesterday, we participiated in the service fair with our own booth, where we shared our club's mission. We had a fantastic experience!" />
          </Grid>
          <Grid item lg={4}>
            <NewsCard imageLink='https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg' title="cdf" description="Hearts2Hands recently took part in an introductory event at Concordia Hanoi. Yesterday, we participiated in the service fair with our own booth, where we shared our club's mission. We had a fantastic experience!" />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;

