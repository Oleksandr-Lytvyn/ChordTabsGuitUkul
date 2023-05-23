import { useEffect, useState } from 'react';

import { getChord } from './service/GetChord';
import { Navigation } from './components/Navigation/Navigation';
import { ResultsWindow } from './components/ResultsWindow/ResultsWindow';
import './index.css';
import { useSelector } from 'react-redux';

export function App() {
  const [chord, setChord] = useState({});

  const instrument = useSelector(state => state.instrument.instrument);
  const key = useSelector(state => state.chord.key);
  const suffix = useSelector(state => state.chord.suffix);
  useEffect(() => {
    const findedChord = getChord(key, suffix, instrument);
    setChord(findedChord);
  }, [instrument, key, suffix]);

  return (
    <>
      <Navigation />
      {chord && <ResultsWindow ch={chord} i={instrument} />}
    </>
  );
}
