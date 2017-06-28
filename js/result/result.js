import App from '../main';
import statisticsData from '../data/statistics-data';
import {renderView} from '../utils';

import SuccessView from './_success-view';
import FailView from './_fail-view';

class Result {
  constructor() {}

  generateView(lives, time, score, trueAnswers) {
    if (lives < 1 || time < 1 || score < 1) {
      this.view = new FailView();
    } else {
      const percentage = statisticsData.getPercentage(time, score)
      this.view = new SuccessView(trueAnswers, percentage);
    }
  }

  init(lives, time, score, trueAnswers) {
    this.generateView(lives, time, score, trueAnswers);
    this.view.onClickReplay = (event) => {
      event.preventDefault();
      App.showWelcome();
    };
    renderView(this.view.element);
  }
}

const result = new Result();

export default result;
