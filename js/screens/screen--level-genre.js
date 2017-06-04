import moduleTimer from './part/module-timer';
import getElementFromTemplate from '../utils/get-element-from-template';
import setScreen from '../controllers/set-screen';
export default (data) => {

  const templateAnswer = (answer) => `<div class="genre-answer">
      <div class="player-wrapper"></div>
      <input type="checkbox" name="answer" value="${answer.value}" id="${answer.id}">
      <label class="genre-answer-check" for="${answer.id}"></label>
    </div>`;

  const templateMain = `
  <section class="main main--level main--level-genre">
    ${moduleTimer()}
    <div class="main-wrap">
      <h2 class="title main-title">Выберите инди-рок треки</h2>
      <form class="genre">
        ${data.map((answer) => templateAnswer(answer)).join(``)}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;

  const screenLevelGenre = getElementFromTemplate(templateMain);
  const sendButton = screenLevelGenre.querySelector(`.genre-answer-send`);
  const checkboxCollection = screenLevelGenre.querySelectorAll(`input[type="checkbox"]`);

  // Проверка, если хотябы 1 секбокс выбран;
  const validateForm = function () {
    for (const checkbox of checkboxCollection) {
      if (checkbox.checked) {
        sendButton.disabled = false;
        break;
      } else {
        sendButton.disabled = true;
      }
    }
  };

  for (const checkbox of checkboxCollection) {
    checkbox.addEventListener(`change`, validateForm);
  }

  const onClickSendButton = function (event) {
    event.preventDefault();
    setScreen();
  };

  sendButton.addEventListener(`click`, onClickSendButton);

  return screenLevelGenre;
};
