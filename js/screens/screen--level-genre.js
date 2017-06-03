import getElementFromTemplate from '../utils/get-element-from-template';
import renderScreen from '../utils/render-screen';
import getRandomElement from '../utils/get-random-element';
import screenLevelSuccess from './screen--result--success';
import screenLevelFail from './screen--result--fail';
import data from '../data/data';
import moduleTimer from '../module/module-timer';

export default () => {
  const timer = moduleTimer(`02`, `00`);

  const template = `
  <section class="main main--level main--level-genre">

    ${timer}

    <div class="main-wrap">
      <h2 class="title main-title">${data.title.levelGenre}</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1">
          <label class="genre-answer-check" for="a-1"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="a-2"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3">
          <label class="genre-answer-check" for="a-3"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4">
          <label class="genre-answer-check" for="a-4"></label>
        </div>

        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;

  const screenLevelGenre = getElementFromTemplate(template);
  const sendButton = screenLevelGenre.querySelector(`.genre-answer-send`);
  const checkboxCollection = screenLevelGenre.querySelectorAll(`input[type="checkbox"]`);

  const toggleSendButton = function (condition) {
    if (condition) {
      sendButton.disabled = false;
    } else {
      sendButton.disabled = true;
    }
  };

  // Проверка, если хотябы 1 секбокс выбран;
  const validateForm = function () {
    let valid = false;
    for (const checkbox of checkboxCollection) {
      if (checkbox.checked) {
        valid = true;
        break;
      }
    }
    toggleSendButton(valid);
  };

  for (const checkbox of checkboxCollection) {
    checkbox.addEventListener(`change`, validateForm);
  }

  const onClickSendButton = function (event) {
    event.preventDefault();
    const screenLevelResult = getRandomElement([screenLevelSuccess, screenLevelFail]);
    renderScreen(screenLevelResult());
  };

  sendButton.addEventListener(`click`, onClickSendButton);

  return screenLevelGenre;
};
