const initialState = {
  instrument: 'urduk',
  key: '',
  suffix: '',
  chord: {
    midi: [],
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'chord/addMidi': {
      return {
        ...state,
        chord: {
          ...state.chord,
          midi: action.payload.midi,
        },
      };
    }
    case 'all/addKey': {
      return {
        ...state,
        key: action.payload,
      };
    }
    default:
      return state;
  }
};
