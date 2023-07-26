import ListFilmFromApp from '../../components/ListFilmFromApp/ListFilmFromApp';
import { useState, useEffect } from 'react';
import { trendingFilmsFromApi } from '../../data/filmsFromApi';
import { Conteiner } from './Home.styled';

const Home = () => {
  const [trends, setTrend] = useState([]);

  useEffect(() => {
    HomePageRender('trending/movie/day');
  }, []);

  const HomePageRender = async () => {
    try {
      const { results } = await trendingFilmsFromApi();

      setTrend(results);
    } catch (error) {
      alert(error.message);
    } finally {
    }
  };
  return (
    <main>
      <Conteiner>
        <h1>Trending today</h1>

        <ListFilmFromApp list={trends}></ListFilmFromApp>
      </Conteiner>
    </main>
  );
};

export default Home;
