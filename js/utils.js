// некоторые функции из этого модуля тестируются, приходится извращятся

const app = typeof document !== `undefined` ? document.querySelector(`.app`) : null;
let currentView = (app !== null) ? app.querySelector(`.main`) : null;
let currentTimer = (app !== null) ? app.querySelector(`.main-timer`) : null;

export const renderView = (template) => {
  app.replaceChild(template, currentView);
  currentView = template;
};

export const renderTimer = (template) => {
  app.replaceChild(template, currentTimer);
  currentTimer = template;
};

export const clearTimer = () => {
  currentTimer.innerHTML = ``;
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
