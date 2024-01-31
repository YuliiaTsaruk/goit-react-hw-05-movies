import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  gap: 16px;
  margin: 0 auto;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
