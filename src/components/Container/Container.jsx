import { ContainerInstrStyled, ContainerStyled } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export const ContainerInstr = ({ children }) => {
  return <ContainerInstrStyled>{children}</ContainerInstrStyled>;
};
