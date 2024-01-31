import { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import { Container } from 'GlobalContainer.styled';
import {
  StyledLink,
  StyledLinkItem,
  StyledList,
  StyledTitle,
} from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLink = useRef(location);

  return (
    <Container>
      <StyledLink to={backLink.current.state?.from ?? '/movies'}>
        Go back
      </StyledLink>

      <MovieDetails />

      <div>
        <StyledTitle>Additional information:</StyledTitle>
        <StyledList>
          <li>
            <StyledLinkItem to={'cast'}>Cast</StyledLinkItem>
          </li>
          <li>
            <StyledLinkItem to={'reviews'}>Reviews</StyledLinkItem>
          </li>
        </StyledList>
      </div>
      <Outlet />
    </Container>
  );
}
