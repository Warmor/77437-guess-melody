import App from '../main';
import gameData from '../data/game-data';

import {renderView} from '../utils';

import ArtistView from './_artist-view';
import GenreView from './_genre-view';

class Game {
  constructor() {
    this.questionData = {};
    this.typeQuestion = {};
  }

  getCurrentView() {
    this.questionData = gameData.questionData;
    this.typeQuestion = this.questionData.type;
    switch (this.typeQuestion) {
      case `artist`:
        this.view = new ArtistView(this.questionData);
        break;
      case `genre`:
        this.view = new GenreView(this.questionData);
        break;
    }
  }

  generateLevel() {
    this.getCurrentView();
    this.view.onAnswer = (event) => {
      event.preventDefault();
      const isAnswerCorrect = this.view.checkAnswer(event.target);
      this.onAnswered(isAnswerCorrect);
    };

    renderView(this.view.element);
  }

  onAnswered(isAnswerCorrect) {
    const isFinalQuestion = gameData.currentQuestion === gameData.questions - 1;
    const newScore = gameData.score + (isAnswerCorrect ? 1 : 0);
    const newLives = isAnswerCorrect ? gameData.lives : gameData.lives - 1;
    gameData.setScore(newScore).setLives(newLives).setTrueAnswers();

    if (newLives === 0 || isFinalQuestion) {
      App.showResult(gameData.lives, gameData.time, gameData.score, gameData.trueAnswers);
    } else {
      gameData.nextQuestion();
      this.generateLevel();
    }
  }

  init() {
    gameData.resetState();
    this.generateLevel();
  }
}

const game = new Game();

export default game;
