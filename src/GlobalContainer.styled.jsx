import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  justify-content: start;
  margin: 0 auto;
  padding: 8px;
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
