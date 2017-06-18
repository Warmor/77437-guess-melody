const computePercentage = ({time, score, statistics}) => {
  const myStatistick = {time, score};
  const newStatistick = statistics.slice();
  newStatistick.push(myStatistick);
  newStatistick.sort(function (a, b) {
    return b.score - a.score || a.time - b.time;
  });
  return Math.trunc(((newStatistick.length - (newStatistick.indexOf(myStatistick) + 1)) / newStatistick.length) * 100);
};

export default computePercentage;
