import { useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLink = useRef(location);

  return (
    <div>
      <Link to={backLink.current.state?.from ?? '/movies'}>Go back</Link>

      <MovieDetails />

      <div>
        <h3>Additional information:</h3>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
