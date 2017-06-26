class StateData {
  constructor() {
    this._initialState = Object.freeze({
      questions: 10,
      currentQuestion: 0,
      time: 120,
      lives: 3,
      score: 0,
    });
    this._state = {};
  }

  get questions() {
    return this._state.questions;
  }
  get currentQuestion() {
    return this._state.currentQuestion;
  }
  get time() {
    return this._state.time;
  }
  get lives() {
    return this._state.lives;
  }
  get score() {
    return this._state.score;
  }

  nextQuestion() {
    this._state.currentQuestion++;
    return this;
  }

  tickTime() {
    this._state.time--;
    return this;
  }

  setLives(newLives) {
    this._state.lives = newLives;
    return this;
  }

  setScore(newScore) {
    this._state.score = newScore;
    return this;
  }

  resetState() {
    return Object.assign(this._state, this._initialState);
  }

}

const stateData = new StateData();

export default stateData;
