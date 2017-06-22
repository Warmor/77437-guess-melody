import ViewLevelArtist from '../view/view--level-artist';

export default ({songs, trueSong, answerCallback}) => {

  const screenLevelArtist = new ViewLevelArtist(songs, trueSong);

  screenLevelArtist.onAnswerClick = (event) => {
    const isAnswerCorrect = screenLevelArtist.checkAnswer(event.target);
    answerCallback(isAnswerCorrect);
  };

  return screenLevelArtist.element;
};
