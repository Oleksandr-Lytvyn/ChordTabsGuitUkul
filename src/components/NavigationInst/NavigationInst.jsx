import { StyledButton, StyledBtnsList } from './NavigationInst.styled';
import { useDispatch } from 'react-redux';
import { addInstrument } from 'redux/slice';
import { useSelector } from 'react-redux';
import { Container } from 'components/Container/Container';

export const NavigationInst = () => {
  const activeInstrument = useSelector(state => state.instrument.instrument);

  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <StyledBtnsList>
          <li style={{ flexGrow: '1' }}>
            <StyledButton
              primary={activeInstrument === 'guit'}
              type="button"
              onClick={() => {
                dispatch(addInstrument('guit'));
              }}
            >
              guitar
            </StyledButton>
          </li>
          <li style={{ flexGrow: '1' }}>
            <StyledButton
              primary={activeInstrument === 'ukul'}
              type="button"
              onClick={() => {
                dispatch(addInstrument('ukul'));
              }}
            >
              ukulele
            </StyledButton>
          </li>
        </StyledBtnsList>
      </Container>
    </>
  );
};
