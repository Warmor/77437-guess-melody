import moduleTimer from './part/module-timer';
import getElementFromTemplate from '../utils/get-element-from-template';
import setScreen from '../controllers/set-screen';
export default (data) => {

  const templateAnswer = (answer) => `
    <div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="${answer.id}" name="answer" value="${answer.value}" />
      <label class="main-answer" for="${answer.id}">
        <img class="main-answer-preview" src="${answer.imgPath}">
        ${answer.name}
      </label>
    </div>`;

  const templateMain = `
  <section class="main main--level main--level-artist">

    ${moduleTimer()}

    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${data.map((answer) => templateAnswer(answer)).join(``)}
      </form>
    </div>
  </section>`;

  const screenLevelArtist = getElementFromTemplate(templateMain);

  const answerCollection = screenLevelArtist.querySelectorAll(`.main-answer`);

  const onClickaAnswer = function () {
    setScreen();
  };

  for (const answer of answerCollection) {
    answer.addEventListener(`click`, onClickaAnswer);
  }

  return screenLevelArtist;
};
