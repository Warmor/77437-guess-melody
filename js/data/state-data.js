class StateData {
  constructor() {
    this.initialState = Object.freeze({
      questions: 10,
      currentQuestion: 0,
      time: 120,
      lives: 3,
      score: 0,
    });
    this.state = {};
  }
  nextQuestion() {
    this.state.currentQuestion++;
    return this.state.currentQuestion;
  }

  tickTime() {
    this.state.time--;
    return this.state.time
  }

  setLives(newLives) {
    this.state.lives = newLives;
    return this.state.lives
  }

  setScore(newScore) {
    this.state.score = newScore;
    return this.state.score
  }

  getState() {
    return this.state;
  }

  resetState() {
    return Object.assign(this.state, this.initialState);
  }

};

const stateData = new StateData();

export default stateData;
