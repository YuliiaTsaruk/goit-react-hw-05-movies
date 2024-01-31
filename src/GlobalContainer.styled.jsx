import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding: 20px;
  margin: 0 auto;
`;

export const Messege = styled.p`
  margin: 0 auto;
  font-size: 24px;
`;

export const Error = styled.p`
  margin: 0 auto;
  font-size: 16px;
  color: #f34b4b;
`;
