import ViewLevelGenre from '../view/view--level-genre';

export default ({songs, trueSong, answerCallback}) => {

  const screenLevelGenre = new ViewLevelGenre(songs, trueSong);

  screenLevelGenre.onClickSendButton = (event) => {
    event.preventDefault();
    const isAnswerCorrect = screenLevelGenre.checkAnswer();
    answerCallback(isAnswerCorrect);
  };

  return screenLevelGenre.element;
};
