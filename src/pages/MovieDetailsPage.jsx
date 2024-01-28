import { MovieCast } from 'components/MovieCast/MovieCast';
import { MovieReviews } from 'components/MovieReviews/MovieReviews';

export default function MovieDetailsPage() {
  return (
    <div>
      <p>MovieDetails</p>
      <MovieCast />
      <MovieReviews />
    </div>
  );
}
