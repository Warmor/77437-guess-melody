import Loader from '../loader';

class StatisticsData {
  constructor() {
    this.statistics = [];
  }

  async load() {
    const response = await Loader.loadResults();
    this.statistics = response;

  }

  saveStatistics(time, score) {
    const data = {
      date: new Date(),
      time: time,
      score: score
    }
    Loader.saveResults(data);
  }

  getPercentage(time, score) {
    const myStatistick = {time, score};
    const newStatistick = this.statistics.slice();
    newStatistick.push(myStatistick);
    newStatistick.sort(function (a, b) {
      return b.score - a.score || a.time - b.time;
    });
    this.saveStatistics(time, score);
    return Math.trunc(((newStatistick.length - (newStatistick.indexOf(myStatistick) + 1)) / newStatistick.length) * 100);
  }

}

const statisticsData = new StatisticsData();

export default statisticsData;
