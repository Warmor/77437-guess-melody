import moduleTimer from './part/module-timer';
import getElementFromTemplate from '../utils/get-element-from-template';
import setScreen from '../controllers/set-screen';
export default (songs, trueSongs) => {

  const templateAnswer = (song) => `
  <div class="genre-answer">
    <div class="player-wrapper">${song.genre}</div>
    <input type="checkbox" name="answer" value="${song.value}" id="${song.id}">
    <label class="genre-answer-check" for="${song.id}"></label>
  </div>`;

  const templateMain = `
  <section class="main main--level main--level-genre">
    ${moduleTimer()}
    <div class="main-wrap">
      <h2 class="title main-title">Выберите трек(и) в "${trueSongs.genre}" стиле</h2>
      <form class="genre">
        ${songs.map((song) => templateAnswer(song)).join(``)}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;

  const screenLevelGenre = getElementFromTemplate(templateMain);
  const submitButtom = screenLevelGenre.querySelector(`.genre-answer-send`);
  const checkboxCollection = screenLevelGenre.querySelectorAll(`input[type="checkbox"]`);

  //получение эталонных ответов
  const curentAnswers = songs.map(function (song) {
    return song.genre === trueSongs.genre
  });

  //сравнение текущих ответов с эталоном
  const checkAnswer = function () {
    let valid = false;
    for (var i = 0; i < checkboxCollection.length; i++) {
      if (checkboxCollection[i].checked === curentAnswers[i]) {
        valid = true;
      } else{
        valid = false;
        break;
      }
    }
    console.log(valid)
    return valid;
  };

  // Проверка, если хотябы 1 секбокс выбран;
  const setStateSubmitButtom = function () {
    for (const checkbox of checkboxCollection) {
      if (checkbox.checked) {
        submitButtom.disabled = false;
        break;
      } else {
        submitButtom.disabled = true;
      }
    }
  };

  const onChangeCheckbox = function () {
    setStateSubmitButtom();
  };

  for (const checkbox of checkboxCollection) {
    checkbox.addEventListener(`change`, onChangeCheckbox);
  }

  const onClickSendButton = function (event) {
    event.preventDefault();
    setScreen(checkAnswer());
  };

  submitButtom.addEventListener(`click`, onClickSendButton);

  return screenLevelGenre;
};
