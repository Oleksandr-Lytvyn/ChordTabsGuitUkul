import { useState } from 'react';
import { WebMidiWindow } from '../WebMidiWindow/WebMidiWindow';
// import { useSelector } from 'react-redux';

export const ResultsWindow = ({ i, ch }) => {
  const [notes, setNotes] = useState([55]);
  // const instr = useSelector(state => state.instrument.instrument);

  // console.log(instr);

  return (
    <>
      <WebMidiWindow
        i={i}
        ch={ch}
        note={notes}
        setNotes={setNotes}
      ></WebMidiWindow>
    </>
  );
};
