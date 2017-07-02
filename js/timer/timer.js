import App from '../main';
import gameData from '../data/game-data';

import {renderTimer} from '../utils';
import {clearTimer} from '../utils';

import TimerView from './_timer-view';

class Timer {
  constructor() {
    this.interval = 0;
  }

  animation() {
    this.interval = setInterval(() => {
      gameData.tickTime();
      if (gameData.time >= gameData.timePassed) {
        this.view.redrawTimer(gameData.time, gameData.timePassed);
      } else {
        this.stop();
        App.showResult(0, 0, 0, 0);
      }
    }, 1000);
  }

  init() {
    this.view = new TimerView(gameData.time);
    renderTimer(this.view.element);
    this.animation();
  }

  stop() {
    clearInterval(this.interval);
    clearTimer();
  }
}

const timer = new Timer();

export default timer;
