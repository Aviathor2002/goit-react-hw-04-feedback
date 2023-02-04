import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;

  background-color: #e7e7e7;
  color: black;
  border: 2px solid #4caf50; /* Green */
  transition-duration: 0.4s;

  &:hover {
    background-color: #4caf50; /* Green */
    color: white;
  }
`;

export const ListButton = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
