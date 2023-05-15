import styled from 'styled-components';

export const ListSuffixes = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
`;

export const ListItem = styled.li`
  background-color: ${props => {
    if (props.isSelected) {
      return 'transparent';
    } else if (props.active) {
      return 'green';
    }
    return '#D0D0D0';
  }};
  color: ${props => {
    if (props.isSelected) {
      return 'black';
    } else if (props.active) {
      return 'white';
    }
    return 'black';
  }};
  text-shadow: 0 0 2px #000;
  outline: ${props => (props.isSelected ? '1px solid black' : 'none')};
  font-weight: 300;
  border-radius: 2px;
  padding: 3px;
  :hover,
  :focus {
    cursor: pointer;
    background-color: transparent;
    outline: 1px solid black;
    color: black;
  }
`;
// rgb(178, 209, 215)
