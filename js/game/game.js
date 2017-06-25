import App from '../main';
import gameData from '../data/game-data';
import stateData from '../data/state-data';
import {renderView} from '../utils';

import ArtistView from './_artist-view';
import GenreView from './_genre-view';

class Game {
  constructor() {}

  getRandomView() {
    if (Math.random() > 0.5) {
      this.screenData = gameData.createScreenData(3);
      this.view = new ArtistView(this.screenData);
    } else {
      this.screenData = gameData.createScreenData(4);
      this.view = new GenreView(this.screenData);
    }
  }

  generateLevel() {
    this.getRandomView();
    this.view.onAnswer = (event) => {
      event.preventDefault();
      const isAnswerCorrect = this.view.checkAnswer(event.target);
      this.onAnswered(stateData.getState(), isAnswerCorrect);
    };

    renderView(this.view.element);
  }

  onAnswered(state, isAnswerCorrect) {
    const {questions, currentQuestion, score, lives} = state;

    const isFinalQuestion = currentQuestion === questions - 1;
    const newScore = score + (isAnswerCorrect ? 1 : 0);
    const newLives = isAnswerCorrect ? lives : lives - 1;
    stateData.setScore(newScore);
    stateData.setLives(newLives);

    if (newLives === 0 || isFinalQuestion) {
      App.showResult();
    } else {
      stateData.nextQuestion();
      this.generateLevel();
    }
  }

  init() {
    stateData.resetState();
    this.generateLevel();
  }
}

const game = new Game();

export default game;
