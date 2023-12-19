import { Link, useLocation } from 'react-router-dom';
import { FilmLi, FilmList, FilmName } from './TrendingMoviesList.styled';

export const TrendingMoviesList = ({ elements }) => {
  const location = useLocation();
  const imgUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <FilmList>
      {elements.map(element => {
        return (
          <FilmLi key={element.id}>
            <Link to={'/movies/' + element.id} state={{ from: location }}>
              <img src={imgUrl + element.poster_path} alt={element.title} />
              <FilmName>{element.title}</FilmName>
            </Link>
          </FilmLi>
        );
      })}
    </FilmList>
  );
};
