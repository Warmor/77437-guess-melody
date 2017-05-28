import getElementFromTemplate from '../utils/get-element-from-template';
import renderScreen from '../utils/render-screen';
import getRandomElement from '../utils/get-random-element';
import screenLevelSuccess from './screen--result--success';
import screenLevelFail from './screen--result--fail';

const template = `
<section class="main main--level main--level-genre">
  <h2 class="title">Выберите инди-рок треки</h2>
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
</section>`;

const screenLevelGenre = getElementFromTemplate(template);
const sendButton = screenLevelGenre.querySelector(`.genre-answer-send`);
const checkboxCollection = screenLevelGenre.querySelectorAll(`input[type="checkbox"]`);

const setInitialState = function () {
  for (let checkbox of checkboxCollection) {
    checkbox.checked = false;
  }
  toggleSendButton(false);
};

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

for (let checkbox of checkboxCollection) {
  checkbox.addEventListener(`change`, validateForm);
}

const onClickSendButton = function (event) {
  event.preventDefault();
  const screenLevelResult = getRandomElement([screenLevelSuccess, screenLevelFail]);
  renderScreen(screenLevelResult);
  setInitialState();
};

sendButton.addEventListener(`click`, onClickSendButton);
export default screenLevelGenre;
