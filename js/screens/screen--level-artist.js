import getElementFromTemplate from '../utils/get-element-from-template';
import renderScreen from '../utils/render-screen';
import screenLevelGenre from './screen--level-genre';
import data from '../data/data';
import moduleTimer from '../module/module-timer';

export default () => {
  const timer = moduleTimer(`02`, `00`);
  const template = `
  <section class="main main--level main--level-artist">

    ${timer}

    <div class="main-wrap">
      <h2 class="title main-title">${data.title.levelArtist}</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1" />
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="">
            Пелагея
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="">
            Краснознаменная дивизия имени моей бабушки
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="">
            Lorde
          </label>
        </div>
      </form>
    </div>
  </section>`;

  const screenLevelArtist = getElementFromTemplate(template);

  const answerCollection = screenLevelArtist.querySelectorAll(`.main-answer`);

  const onClickaAnswer = function () {
    renderScreen(screenLevelGenre());
  };

  for (const answer of answerCollection) {
    answer.addEventListener(`click`, onClickaAnswer);
  }

  return screenLevelArtist;
};
