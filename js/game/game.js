import App from '../main';
import gameData from '../data/game-data';

import {renderView} from '../utils';

import ArtistView from './_artist-view';
import GenreView from './_genre-view';

class Game {
  constructor() {
    this.questionData = {};
    this.typeQuestion = {};
    this.localTimer = 0;
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

  startLocalTimer() {
    this.localTimer = 0;
    this.interval = setInterval(() => {
      this.localTimer++;
    }, 1000);
  }

  generateLevel() {
    this.startLocalTimer();
    this.getCurrentView();
    this.view.onAnswer = (event) => {
      event.preventDefault();
      const isAnswerCorrect = this.view.checkAnswer(event.target);
      this.onAnswered(isAnswerCorrect);
    };
    renderView(this.view.element);
  }

  onAnswered(isAnswerCorrect) {
    clearInterval(this.interval);
    let newScore = gameData.score;

    if (isAnswerCorrect) {
      gameData.incrementTrueAnswersCounter();
      if (this.localTimer < 10) {
        newScore += 2;
      } else {
        newScore += 1;
      }
    }

    const isFinalQuestion = gameData.currentQuestion === gameData.questions - 1;
    const newLives = isAnswerCorrect ? gameData.lives : gameData.lives - 1;
    gameData.setScore(newScore).setLives(newLives);

    if (newLives === 0 || isFinalQuestion) {
      App.showResult(gameData.lives, gameData.time, gameData.score, gameData.trueAnswers);
    } else {
      gameData.incrementCurrentQuestionCounter();
      this.generateLevel();
    }
  }

  init() {
    this.generateLevel();
  }
}

const game = new Game();

export default game;
