import getElementFromTemplate from '../utils/get-element-from-template';
import renderScreen from '../utils/render-screen';
import screenWelcome from './screen--welcome';
import data from '../data/data';

export default () => {
  const template = `
  <section class="main main--result main--result-success">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${data.title.resultSuccess}</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const screenResultSuccess = getElementFromTemplate(template);

  const replayButton = screenResultSuccess.querySelector(`.main-replay`);

  const onClickReplayButton = function () {
    renderScreen(screenWelcome());
  };

  replayButton.addEventListener(`click`, onClickReplayButton);

  return screenResultSuccess;
};
