const adapter = (questions) => {
  let counter = 0;
  questions.forEach((question) => {
    question.title = question.question;

    question.answers.forEach((answer) => {
      answer.id = counter++;
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
      time: 120,
      lives: 3,
      score: 0,
    });
    this._state = {};
    this._questionsData = {};
  }

  get urlRead() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
  }

  get urlWrite() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
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

  load() {
    return fetch(this.urlRead)
      .then((resp) => resp.json())
      .then((resp) => adapter(resp))
      .then((resp) => {
        this._questionsData = resp;
        return resp;
      });
  }
}

const gameData = new GameData();

export default gameData;
