import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 20px;
  height: 50px;
  width: 100%;
  border: none;
  /* background-color: transparent; */
  background: ${props => (props.primary ? 'green' : 'transparent')};
  color: ${props => (props.primary ? 'white' : 'gray')};
  border-bottom: 3px solid grey;
  cursor: pointer;
`;

export const StyledBtnsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
  width: 100%;
`;
