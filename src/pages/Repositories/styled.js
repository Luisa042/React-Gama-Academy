import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: 0.5rem 0;
  background: #000;
  color: #fff;
  padding: 0.5rem;
`;

export const LinkHome = styled(Link)`
  margin: 2rem auto;
  padding: 0.5rem 0;
  display: block;
  text-align: center;
  width: 4rem;
  background: #000;
  color: #fff;
  font-family: sans-serif;
  text-decoration: none;
`;
