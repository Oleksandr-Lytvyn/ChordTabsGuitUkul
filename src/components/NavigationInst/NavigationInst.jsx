import { StyledButton, StyledBtnsList } from './NavigationInst.styled';

export const NavigationInst = ({ i }) => {
  return (
    <>
      <StyledBtnsList>
        <li style={{ flexGrow: '1' }}>
          <StyledButton
            primary="thru"
            type="button"
            onClick={() => {
              i('guit');
            }}
          >
            guitar
          </StyledButton>
        </li>
        <li style={{ flexGrow: '1' }}>
          <StyledButton
            type="button"
            onClick={() => {
              i('ukul');
            }}
          >
            ukulele
          </StyledButton>
        </li>
      </StyledBtnsList>
    </>
  );
};
