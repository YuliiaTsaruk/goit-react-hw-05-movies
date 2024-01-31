import { Link } from 'react-router-dom';
import { Container, Messege } from 'GlobalContainer.styled';

export default function NotFoundPage() {
  return (
    <Container>
      <Messege>
        Sorry, page not found, but you can return to our{' '}
        <Link to="/">Home page</Link>
      </Messege>
    </Container>
  );
}
