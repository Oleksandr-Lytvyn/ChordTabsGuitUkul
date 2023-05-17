import { configureStore } from '@reduxjs/toolkit';
import { chordReducer, instrumentReducer } from './slice';

export const store = configureStore({
  reducer: { chord: chordReducer, instrument: instrumentReducer },
});
