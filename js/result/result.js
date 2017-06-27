import App from '../main';
import statisticsData from '../data/statistics-data';
import {renderView} from '../utils';

import SuccessView from './_success-view';
import FailView from './_fail-view';

class Result {
  constructor() {}

  generateView(lives, time, score) {
    if (lives < 1 || time < 1) {
      this.view = new FailView();
    } else {
      this.view = new SuccessView(score, statisticsData.getPercentage(time, score));
    }
  }

  init(lives, time, score) {
    this.generateView(lives, time, score);
    this.view.onClickReplay = (event) => {
      event.preventDefault();
      App.showWelcome();
    };
    renderView(this.view.element);
  }
}

const result = new Result();

export default result;
