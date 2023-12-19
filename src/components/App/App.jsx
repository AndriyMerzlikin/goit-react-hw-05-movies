import HomePage from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { NavLink, Route, Routes } from 'react-router-dom';
import { StyledHeader, StyledLi, StyledNavLink, StyledUl } from './App.styled';

export const App = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <StyledUl>
            <StyledLi>
              <StyledNavLink to="/">Home</StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </StyledLi>
          </StyledUl>
        </nav>
      </StyledHeader>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="casts" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
