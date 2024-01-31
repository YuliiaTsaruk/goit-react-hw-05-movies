import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Sorry, page not found, but you can return to our{' '}
        <Link to="/">Home page</Link>
      </p>
    </div>
  );
}
