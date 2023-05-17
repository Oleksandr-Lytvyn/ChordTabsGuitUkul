import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  StyledChordGuitarWrapper,
  StyledChordGuitar,
} from './ChordGuitar.styled';
// import { addMidi } from '../../redux/actions';

const Finger = ({ step }) => {
  const finger = {};
  if (step.fret === -1) {
    finger.vertical = '0';
  } else if (step.fret === 0) {
    finger.vertical = '0';
  } else if (step.fret === 1) {
    finger.vertical = '0px';
  } else if (step.fret === 2) {
    finger.vertical = '25px';
  } else if (step.fret === 3) {
    finger.vertical = '50px';
  } else if (step.fret === 4) {
    finger.vertical = '75px';
  }

  if (step.finger === 0) {
    finger.isFinger = false;
  } else if (step.finger === 1) {
    finger.isFinger = true;
    finger.finger = 1;
  } else if (step.finger === 2) {
    finger.isFinger = true;
    finger.finger = 2;
  } else if (step.finger === 3) {
    finger.isFinger = true;
    finger.finger = 3;
  } else if (step.finger === 4) {
    finger.isFinger = true;
    finger.finger = 4;
  }

  // console.log(step);

  return (
    <div
      style={{
        width: '16px',
        height: '16px',
        background: `${finger.isFinger ? 'green' : 'transparent'}`,
        transform: `translateY(${finger.vertical})`,
        textAlign: 'center',
        borderRadius: '50%',
        marginTop: '5px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '7px solid transparent',
        boxSizing: 'border-box',
      }}
    >
      {finger.finger}
    </div>
  );
};

export const ChordGuitar = ({ steps, midi, play, setNotes }) => {
  // const dispatch = useDispatch();
  return (
    <StyledChordGuitarWrapper>
      <div>
        <StyledChordGuitar
          onClick={e => {
            // dispatch(addMidi(midi));
            setNotes(midi);
            setTimeout(() => {
              play();
            }, 100);
          }}
        >
          {steps.map(step => {
            return <Finger key={nanoid()} step={step}></Finger>;
          })}
        </StyledChordGuitar>
      </div>
    </StyledChordGuitarWrapper>
  );
};
