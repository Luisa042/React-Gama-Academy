import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  height: 1.75rem;
  padding: 0 0.5rem;
  border: 2px solid #ddd;
  border-radius: 0.25rem 0 0 0.25rem;

  &:focus,
  &:active {
    outline: none;
  }
`;

export const Button = styled.button`
  height: 1.75rem;
  padding: 0 0.25rem;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 0 0.25rem 0.25rem 0;

  &:focus,
  &:active {
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  display: block;
  margin-top: 0.75rem;
  font-size: small;
  font-family: sans-serif;
  color: red;
  font-weigth: 600;
`;
