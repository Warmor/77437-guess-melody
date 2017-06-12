import getElementFromTemplate from '../utils/get-element-from-template';
import {onRepeatGame} from '../controllers/game-controller';

export default (totalScore, percentage) => {
  const template = `
  <section class="main main--result main--result-success">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${totalScore}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${percentage}%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const screenResultSuccess = getElementFromTemplate(template);

  const replayButton = screenResultSuccess.querySelector(`.main-replay`);

  const onClickReplayButton = function () {
    onRepeatGame();
  };

  replayButton.addEventListener(`click`, onClickReplayButton);

  return screenResultSuccess;
};
