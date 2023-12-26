import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const NLink = styled(NavLink)`
  padding: 8px 12px;
  margin-left: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  font-weight: 500;

  &.active {
    color: #fff;
    background-color: #fa7b6a;
  }
`;
