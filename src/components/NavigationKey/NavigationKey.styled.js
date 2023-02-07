import styled from 'styled-components';

export const KeyList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  gap: 10px;
`;

export const KeyItem = styled.li`
  /* background-color: #f5f3e8; */
  background-color: ${props => (props.active ? 'green' : '#f5f3e8')};
  border-radius: 4px;
  padding: 10px;

  :hover,
  :focus {
    cursor: pointer;
  }
`;
