import getElementFromTemplate from '../utils/get-element-from-template';

export default ({songs, trueSong, answerCallback}) => {
  const templateAnswer = (song) => `
  <div class="genre-answer">
    <div class="player-wrapper">${song.genre}</div>
    <input type="checkbox" name="answer" value="${song.value}" id="${song.id}">
    <label class="genre-answer-check" for="${song.id}"></label>
  </div>`;

  const templateMain = `
  <section class="main main--level main--level-genre">
    <div class="main-wrap">
      <h2 class="title main-title">Выберите трек(и) в "${trueSong.genre}" стиле</h2>
      <form class="genre">
        ${songs.map((song) => templateAnswer(song)).join(``)}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </div>
  </section>`;

  const screenLevelGenre = getElementFromTemplate(templateMain);
  const submitButtom = screenLevelGenre.querySelector(`.genre-answer-send`);
  const checkboxCollection = screenLevelGenre.querySelectorAll(`input[type="checkbox"]`);

  // получение эталонных ответов
  const curentAnswers = songs.map(function (song) {
    return song.genre === trueSong.genre;
  });

  // сравнение текущих ответов с эталоном
  const checkAnswer = function () {
    let valid = false;
    for (let i = 0; i < checkboxCollection.length; i++) {
      if (checkboxCollection[i].checked === curentAnswers[i]) {
        valid = true;
      } else {
        valid = false;
        break;
      }
    }
    return valid;
  };

  // Проверка, если хотябы 1 секбокс выбран;
  const setStateSubmitButtom = function () {
    let anyCheckboxChecked = false;
    for (const checkbox of checkboxCollection) {
      if (checkbox.checked) {
        anyCheckboxChecked = true;
        break;
      }
    }
    submitButtom.disabled = !anyCheckboxChecked;
  };

  for (const checkbox of checkboxCollection) {
    checkbox.addEventListener(`change`, setStateSubmitButtom);
  }

  const onClickSendButton = function (event) {
    event.preventDefault();
    const isAnswerCorrect = checkAnswer();
    answerCallback(isAnswerCorrect);
  };

  submitButtom.addEventListener(`click`, onClickSendButton);

  return screenLevelGenre;
};
