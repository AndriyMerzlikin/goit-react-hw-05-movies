import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import { StyledHeader, StyledLi, StyledNavLink, StyledUl } from './App.styled';
import { Suspense, lazy } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

const MoviesPage = lazy(() => import('pages/MoviesPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

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
      <Suspense
        fallback={
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="casts" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
