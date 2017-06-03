import moduleTimer from './part/module-timer';
import getElementFromTemplate from '../utils/get-element-from-template';
import setScreen from '../controllers/set-screen';
export default () => {
  const timer = moduleTimer(`02`, `00`);
  const template = `
  <section class="main main--level main--level-artist">

    ${timer}

    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
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
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-2" />
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="">
            Краснознаменная дивизия имени моей бабушки
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-3" name="answer" value="val-3" />
          <label class="main-answer" for="answer-3">
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
    setScreen()
  };

  for (const answer of answerCollection) {
    answer.addEventListener(`click`, onClickaAnswer);
  }

  return screenLevelArtist;
};
