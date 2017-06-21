import ViewResultSuccess from '../view/view--result--success';

export default ({totalScore, percentage, onClickReplay}) => {

  const screenResultSuccess = new ViewResultSuccess(totalScore, percentage);

  screenResultSuccess.onClickReplay = onClickReplay;

  return screenResultSuccess.element;
};
