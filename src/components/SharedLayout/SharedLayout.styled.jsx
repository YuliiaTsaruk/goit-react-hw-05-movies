import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #f6f6f6;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #090909;
  font-size: 24px;
  font-weight: 700;
  margin-right: 20px;

  &.active {
    text-decoration: underline;
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  justify-content: end;
  margin-right: 24px;
`;
