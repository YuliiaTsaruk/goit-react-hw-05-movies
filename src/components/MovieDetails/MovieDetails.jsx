import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'components/Api';
import { Loader } from 'components/Loader/Loader';
import { Container, Error } from 'GlobalContainer.styled';
import {
  StyledContainer,
  StyledFilmTitle,
  StyledImg,
  StyledInfoWrapper,
  StyledText,
  StyledTitleText,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMoviesDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetchMoviesDetails(movieId);
        setMovie(response);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMoviesDetails();
  }, [movieId]);

  const getPostersUrl = () => {
    const posterBaseURL = 'https://image.tmdb.org/t/p/w200';
    const poster = posterBaseURL + movie.poster_path;
    return poster;
  };

  const convertToPercentage = score => {
    return (score * 10).toFixed(2) + '%';
  };

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <Error>Oops, something went wrong...</Error>}
      {movie && (
        <StyledContainer>
          {movie.poster_path ? (
            <StyledImg
              src={getPostersUrl(movie.poster_path)}
              alt={movie.title}
            />
          ) : (
            <StyledImg
              src="https://via.placeholder.com/200"
              alt="placeholder"
            />
          )}
          <StyledInfoWrapper>
            <StyledFilmTitle>{movie.title}</StyledFilmTitle>
            <StyledText>
              User Score: {convertToPercentage(movie.vote_average)}
            </StyledText>
            <StyledText>
              <StyledTitleText>Overview</StyledTitleText> {movie.overview}
            </StyledText>
            <StyledText>
              <StyledTitleText>Genres</StyledTitleText>
              <span>
                {movie.genres.map(genre => (
                  <span key={genre.id}> {genre.name} </span>
                ))}
              </span>
            </StyledText>
          </StyledInfoWrapper>
        </StyledContainer>
      )}
    </Container>
  );
}
