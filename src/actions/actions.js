const newGame = (e) => {
  e.preventDefault();

  return {
    type: 'NEW_GAME',
  };
};

const toggleSpot = (idx) => {
  return {
    type: 'TOGGLE_SPOT',
    payload: idx
  };
};


export { newGame, toggleSpot };