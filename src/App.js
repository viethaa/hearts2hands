import ButtonAppBar from './components/navbar/navbar';
import NewsCard from './components/card/card'
import Container from '@mui/material/Container';

function App() {
  return (
    <Container className="App">
      <ButtonAppBar/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </Container>
  );
}

export default App;

