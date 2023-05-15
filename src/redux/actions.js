export const addMidi = midi => {
  return {
    type: 'chord/addMidi',
    payload: {
      midi,
    },
  };
};

export const addKey = key => {
  return {
    type: 'all/addKey',
    payload: key,
  };
};
