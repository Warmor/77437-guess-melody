import Loader from '../loader';
import {computePercentage} from '../utils';

class StatisticsData {
  constructor() {
    this._statistics = [];
  }

  getPercentage(time, score) {
    return computePercentage(time, score, this._statistics);
  }

  saveStatistics(realTime, realScore) {
    const data = {
      date: new Date(),
      time: realTime,
      score: realScore
    };
    Loader.saveResults(data);
  }

  async load() {
    const response = await Loader.loadResults();
    this._statistics = response;

  }

}

const statisticsData = new StatisticsData();

export default statisticsData;
