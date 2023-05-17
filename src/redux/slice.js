import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   instrument: 'urdukt',
  key: '',
  suffix: '',
  chord: {
    midi: [],
  },
};

const chordSlice = createSlice({
  name: 'chord',
  initialState,
  reducers: {
    addKey(state, action) {
      return { ...state, key: action.payload };
    },
    addSuffix(state, action) {
      return { ...state, suffix: action.payload };
    },
  },
});

const instrumentSlice = createSlice({
  name: 'instrument',
  initialState: '',
  reducers: {
    addInstrument(state, action) {
      return { instrument: action.payload };
    },
  },
});

export const { addKey, addSuffix } = chordSlice.actions;
export const { addInstrument } = instrumentSlice.actions;

export const chordReducer = chordSlice.reducer;
export const instrumentReducer = instrumentSlice.reducer;
