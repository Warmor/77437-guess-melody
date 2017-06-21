import ViewLevelGenre from '../view/view--level-genre';

export default ({songs, trueSong, answerCallback}) => {

  const screenLevelGenre = new ViewLevelGenre(songs, trueSong);

  // получение эталонных ответов
  const curentAnswers = songs.map(function (song) {
    return song.genre === trueSong.genre;
  });

  // сравнение текущих ответов с эталоном
  const checkAnswer = function (checkboxCollection) {
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

  screenLevelGenre.onClickSendButton = (event) => {
    event.preventDefault();
    const isAnswerCorrect = checkAnswer(screenLevelGenre.checkboxCollection);
    answerCallback(isAnswerCorrect);
  };

  screenLevelGenre.setStateSubmitButtom = () => {
    let anyCheckboxChecked = false;
    for (const checkbox of screenLevelGenre.checkboxCollection) {
      if (checkbox.checked) {
        anyCheckboxChecked = true;
        break;
      }
    }
    screenLevelGenre.submitButtom.disabled = !anyCheckboxChecked;
  };

  return screenLevelGenre.element;
};
