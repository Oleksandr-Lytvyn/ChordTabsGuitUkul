import { useState } from 'react';
import { StyledButton, StyledBtnsList } from './NavigationInst.styled';

export const NavigationInst = ({ si }) => {
  const [guitActive, setGuitActive] = useState(false);
  const [ukulActive, setUkulActive] = useState(false);
  return (
    <>
      <StyledBtnsList>
        <li style={{ flexGrow: '1' }}>
          <StyledButton
            primary={guitActive}
            type="button"
            onClick={() => {
              si('guit');
              setGuitActive(true);
              setUkulActive(false);
            }}
          >
            guitar
          </StyledButton>
        </li>
        <li style={{ flexGrow: '1' }}>
          <StyledButton
            primary={ukulActive}
            type="button"
            onClick={() => {
              si('ukul');
              setUkulActive(true);
              setGuitActive(false);
            }}
          >
            ukulele
          </StyledButton>
        </li>
      </StyledBtnsList>
    </>
  );
};
