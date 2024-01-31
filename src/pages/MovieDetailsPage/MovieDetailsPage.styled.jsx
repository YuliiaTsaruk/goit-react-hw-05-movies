import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  padding: 8px;
  width: 100px;
  text-align: center;
  color: black;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLinkItem = styled(Link)`
  font-size: 18px;
  padding: 4px;
  margin-bottom: 4px;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 20px;
`;
