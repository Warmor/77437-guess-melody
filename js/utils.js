const app = document.querySelector(`.app`);
let currentScreen;

export const renderView = function (template) {
  currentScreen = app.querySelector(`.main`);
  app.replaceChild(template, currentScreen);
};

export const renderTimer = function (template) {
  currentScreen = app.querySelector(`.main-timer`);
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
