class StatisticsData {
  constructor() {
    this.statistics = [
      {time: 50, score: 10},
      {time: 55, score: 9},
      {time: 60, score: 8},
      {time: 65, score: 7},
      {time: 70, score: 6},
      {time: 75, score: 5},
      {time: 80, score: 4},
      {time: 85, score: 3},
      {time: 90, score: 2},
    ];
  }

  getPercentage(time, score) {
    const myStatistick = {time, score};
    const newStatistick = this.statistics.slice();
    newStatistick.push(myStatistick);
    newStatistick.sort(function (a, b) {
      return b.score - a.score || a.time - b.time;
    });
    return Math.trunc(((newStatistick.length - (newStatistick.indexOf(myStatistick))) / newStatistick.length) * 100);
  }

};

const statisticsData = new StatisticsData();

export default statisticsData;;


