import styled from 'styled-components';

export const ContainerStyled = styled.div`
  /* background-color: #cee0e1; */

  padding: 0;

  @media screen and (${p => p.theme.media.medium}) {
    padding: 0;
  }

  @media screen and (${p => p.theme.media.large}) {
    padding: 0;
  }
`;

export const ContainerInstrStyled = styled(ContainerStyled)`
  display: flex;
  width: 100vw;
`;
