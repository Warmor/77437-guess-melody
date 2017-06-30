const app = typeof document !== `undefined` ? document.querySelector(`.app`) : null;

export const renderView = (template) => {
  const currentScreen = app.querySelector(`.main`);
  app.replaceChild(template, currentScreen);
};

export const renderTimer = (template) => {
  const currentScreen = app.querySelector(`.main-timer`);
  app.replaceChild(template, currentScreen);
};

export const clearTimer = () => {
  const timer = app.querySelector(`.main-timer`);
  timer.innerHTML = ``;
};

export const convertTime = (time) => {
  return {
    min: (`0` + Math.trunc(time / 60)).substr(-2, 2),
    sec: (`0` + time % 60).substr(-2, 2),
  };
};

export const computePercentage = (time, score, statistics) => {
  const myStatistick = {time, score};
  const newStatistick = statistics.slice();
  newStatistick.push(myStatistick);
  newStatistick.sort(function (a, b) {
    return b.score - a.score || a.time - b.time;
  });
  return Math.trunc(((newStatistick.length - (newStatistick.indexOf(myStatistick) + 1)) / newStatistick.length) * 100);
};
