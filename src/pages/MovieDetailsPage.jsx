import { MovieCast } from 'components/MovieCast/MovieCast';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { MovieReviews } from 'components/MovieReviews/MovieReviews';

export default function MovieDetailsPage() {
  return (
    <div>
      <MovieDetails />
      <MovieCast />
      <MovieReviews />
    </div>
  );
}
