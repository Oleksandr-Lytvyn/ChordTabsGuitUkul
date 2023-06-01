import { useState } from 'react';
import { WebMidiWindow } from '../WebMidiWindow/WebMidiWindow';

export const ResultsWindow = ({ i, ch }) => {
  const [notes, setNotes] = useState([55]);

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
