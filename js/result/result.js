import App from '../main';
import stateData from '../data/state-data';
import statisticsData from '../data/statistics-data';
import {renderView} from '../utils';

import SuccessView from './_success-view';
import FailView from './_fail-view';

class Result {
  constructor() {}

  generateView() {
    if (stateData.lives < 1 || stateData.time < 1) {
      this.view = new FailView();
    } else {
      this.view = new SuccessView(stateData.score, statisticsData.getPercentage(stateData.time, stateData.score));
    }
  }

  generateResultScreen() {
    this.generateView();
    this.view.onClickReplay = (event) => {
      event.preventDefault();
      App.showWelcome();
    };

    renderView(this.view.element);
  }

  init() {
    this.generateResultScreen();
  }
}

const result = new Result();

export default result;
