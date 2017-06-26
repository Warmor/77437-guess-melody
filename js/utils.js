const app = document.querySelector(`.app`);
let currentScreen;

export const renderView = function (template) {
  currentScreen = app.querySelector(`.main`);
  app.replaceChild(template, currentScreen);
};
