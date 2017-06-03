import moduleTimer from './part/module-timer';
import getElementFromTemplate from '../utils/get-element-from-template';
import setScreen from '../controllers/set-screen';
export default (data) => {
  const template = `
  <section class="main main--level main--level-artist">

    ${moduleTimer()}

    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="${data[0].value}" />
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="${data[0].imgPath}">
            ${data[0].name}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="${data[1].value}" />
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="${data[1].imgPath}">
            ${data[1].name}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-3" name="answer" value="${data[2].value}" />
          <label class="main-answer" for="answer-3">
            <img class="main-answer-preview" src="${data[2].imgPath}">
            ${data[2].name}
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
