(function () {

  const app = document.querySelector(`.app`);
  const templates = document.querySelector(`#templates`).content;
  const screenWelcome = templates.querySelector(`.main--welcome`);
  const screenLevelArtist = templates.querySelector(`.main--level-artist`);
  const screenLevelGenre = templates.querySelector(`.main--level-genre`);
  const screenLevelComplited = templates.querySelector(`.main--result--complited`);
  const screenLevelFail = templates.querySelector(`.main--result--fail`);
  const screenSequence = [screenWelcome, screenLevelArtist, screenLevelGenre, screenLevelComplited, screenLevelFail];
  const ARROW_LEFT = 37;
  const ARROW_RIGHT = 39;
  const screenSequenceLimit = screenSequence.length - 1;
  let currentSequence = 0;
  let currentScreen;

  const renderScreen = function (index) {
    currentScreen = app.querySelector(`.main`);
    app.replaceChild(screenSequence[index], currentScreen);
  };

  const onDocumentKeyDown = function (event) {
    if (event.altKey && event.keyCode === ARROW_RIGHT && currentSequence < screenSequenceLimit) {
      ++currentSequence;
    } else if (event.altKey && event.keyCode === ARROW_LEFT && currentSequence > 0) {
      --currentSequence;
    }
    renderScreen(currentSequence);
  };
  document.addEventListener(`keydown`, onDocumentKeyDown);

  renderScreen(0);

})();
