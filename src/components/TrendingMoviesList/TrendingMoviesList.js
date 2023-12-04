export const TrendingMoviesList = ({ elements }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <ul>
      {elements.map(element => {
        return (
          <li key={element.id}>
            <img src={imgUrl + element.poster_path} alt={element.title} />
          </li>
        );
      })}
    </ul>
  );
};
