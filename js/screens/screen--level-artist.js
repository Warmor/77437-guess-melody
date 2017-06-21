import ViewLevelArtist from '../view/view--level-artist';

export default ({songs, trueSong, answerCallback}) => {

  const screenLevelArtist = new ViewLevelArtist(songs, trueSong);

  const checkAnswer = (element) => {
    const answerID = element.id;
    const currentID = trueSong.id;
    if (answerID === currentID) {
      return true;
    } else {
      return false;
    }
  };

  screenLevelArtist.onAnswerClick = (event) => {
    const isAnswerCorrect = checkAnswer(event.target);
    answerCallback(isAnswerCorrect);
  };

  return screenLevelArtist.element;
};
