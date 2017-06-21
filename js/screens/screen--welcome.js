import ViewWelcome from '../view/view--welcome';

export default ({onPlayClick}) => {

  const screenWelcome = new ViewWelcome();

  screenWelcome.onPlayClick = onPlayClick;

  return screenWelcome.element;
};
