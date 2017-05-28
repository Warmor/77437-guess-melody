const app = document.querySelector(`.app`);
let currentScreen;

const renderScreen = function (template) {
  currentScreen = app.querySelector(`.main`);
  app.replaceChild(template, currentScreen);
};

export default renderScreen;
