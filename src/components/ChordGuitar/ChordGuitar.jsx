import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  StyledChordGuitarWrapper,
  StyledChordGuitar,
} from './ChordGuitar.styled';
import { getMidiNote } from 'service/getMidiNote';

const Finger = ({ step, onClick }) => {
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
      onClick={onClick}
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

export const ChordGuitar = ({ steps, midi, play, setNotes, baseFret }) => {
  // const dispatch = useDispatch();
  console.log(steps);
  let i = 0;
  return (
    <StyledChordGuitarWrapper>
      <div>
        <StyledChordGuitar
        // onClick={e => {
        //   // dispatch(addMidi(midi));
        //   console.log('click');
        //   setNotes(midi);
        //   setTimeout(() => {
        //     play();
        //   }, 100);
        // }}
        >
          {steps.map(step => {
            const note = getMidiNote(step, i).toString();

            i += 1;
            return (
              <Finger
                onClick={e => {
                  // dispatch(addMidi(midi));
                  console.log('click', note);
                  setNotes(note);
                  setTimeout(() => {
                    play();
                  }, 100);
                }}
                key={nanoid()}
                step={step}
                note={note}
              ></Finger>
            );
          })}
        </StyledChordGuitar>
      </div>
    </StyledChordGuitarWrapper>
  );
};
