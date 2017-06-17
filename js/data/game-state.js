const initialState = Object.freeze({
  screen: `welcome`,
  questions: 10,
  currentQuestion: 0,
  timer: 120,
  lives: 3,
  score: 0,
  percentage: 0
});

let state = {};

export const getState = () => state;
export const setState = (newState) => {
  state = newState;
};
export const resetState = () => {
  return Object.assign(state, initialState);
};
