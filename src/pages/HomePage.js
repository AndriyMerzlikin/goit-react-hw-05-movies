import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { fetchTrendingMovies } from '../components/api';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const result = async () => {
      try {
        const movies = await fetchTrendingMovies();
        if (movies.length) {
          setMoviesList(movies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <TrendingMoviesList elements={moviesList} />
    </div>
  );
}
