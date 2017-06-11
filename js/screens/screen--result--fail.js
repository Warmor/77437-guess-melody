import getElementFromTemplate from '../utils/get-element-from-template';
import {onRepeatGame} from '../controllers/game-controller';

export default () => {
  const template = `
  <section class="main main--result main--result-fail">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const screenResultFail = getElementFromTemplate(template);

  const replayButton = screenResultFail.querySelector(`.main-replay`);

  const onClickReplayButton = function () {
    onRepeatGame();
  };

  replayButton.addEventListener(`click`, onClickReplayButton);

  return screenResultFail;
};
