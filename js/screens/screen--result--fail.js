import ViewResultFail from '../view/view--result--fail';

export default ({onClickReplay}) => {

  const screenResultFail = new ViewResultFail();

  screenResultFail.onClickReplay = onClickReplay;

  return screenResultFail.element;
};
