import styled from 'styled-components';

export const ListSuffixes = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
`;

export const ListItem = styled.li`
  background-color: ${props => (props.active ? 'green' : '#D0D0D0 ')};
  color: ${props => (props.active ? 'white' : 'black ')};
  font-weight: 300;
  border-radius: 2px;
  padding: 3px;
  :hover,
  :focus {
    cursor: pointer;
  }
`;
// rgb(178, 209, 215)
