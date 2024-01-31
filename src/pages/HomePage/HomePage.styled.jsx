import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: #272727;
  display: flex;
  justify-content: center;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 48px) / 5;
  gap: 24px 16px;
`;

export const StyledItem = styled.li`
  display: flex;
  max-width: 200px;
  gap: 16px;
  margin: 0 auto;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

export const StyledFilmTitle = styled.h3`
  padding: 4px;
`;
