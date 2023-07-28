import MoviesList from '../../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { trendingFilmsFromApi } from '../../data/filmsFromApi';
import { Conteiner } from './Home.styled';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [trends, setTrend] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    HomePageRender();
  }, []);

  const HomePageRender = async () => {
    setIsLoading(true);

    try {
      const { results } = await trendingFilmsFromApi();

      setTrend(results);
    } catch (error) {
      setIsError(error.message);
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
        {trends.length > 0 && <MoviesList list={trends} />}
      </Conteiner>
    </main>
  );
};

export default Home;
