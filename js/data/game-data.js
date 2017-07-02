import Loader from '../loader';

const adapter = (questions) => {
  let counter = 0;
  questions.forEach((question) => {
    question.title = question.question;

    question.answers.forEach((answer) => {
      answer.id = String(++counter);
    });

    delete question.question;
  });
  return questions;
};

class GameData {

  constructor() {
    this._initialState = Object.freeze({
      questions: 10,
      currentQuestion: 0,
      trueAnswers: 0,
      time: 120,
      timePassed: 0,
      lives: 3,
      score: 0,
    });
    this._state = {};
    this._questionsData = {};
  }

  get questionData() {
    return this._questionsData[this._state.currentQuestion];
  }

  get questions() {
    return this._state.questions;
  }

  get currentQuestion() {
    return this._state.currentQuestion;
  }

  get trueAnswers() {
    return this._state.trueAnswers;
  }

  get time() {
    return this._state.time;
  }

  get timePassed() {
    return this._state.timePassed;
  }

  get lives() {
    return this._state.lives;
  }

  get score() {
    return this._state.score;
  }

  setLives(newLives) {
    this._state.lives = newLives;
    return this;
  }

  setScore(newScore) {
    this._state.score = newScore;
    return this;
  }

  tickTime() {
    this._state.timePassed++;
    return this;
  }

  incrementCurrentQuestionCounter() {
    this._state.currentQuestion++;
    return this;
  }

  incrementTrueAnswersCounter() {
    this._state.trueAnswers++;
    return this;
  }

  resetState() {
    return Object.assign(this._state, this._initialState);
  }

  async load() {
    gameData.resetState();
    const response = await Loader.loadData();
    this._questionsData = adapter(response);
  }
}

const gameData = new GameData();

export default gameData;
