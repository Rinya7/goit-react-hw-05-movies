import ListFilmFromApp from '../../components/ListFilmFromApp/ListFilmFromApp';
import { useState, useEffect } from 'react';
import { trendingFilmsFromApi } from '../../data/filmsFromApi';
import { Conteiner } from './Home.styled';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [trends, setTrend] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    HomePageRender('trending/movie/day');
  }, []);

  const HomePageRender = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { results } = await trendingFilmsFromApi();

      setTrend(results);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main>
      <Conteiner>
        <h1>Trending today</h1>
        {isError && <p>Oops..Somesing went wrong..</p>}
        {isLoading && <Loader></Loader>}
        {trends.length > 0 && <ListFilmFromApp list={trends} />}
      </Conteiner>
    </main>
  );
};

export default Home;
