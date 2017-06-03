import getElementFromTemplate from '../utils/get-element-from-template';
import renderScreen from '../utils/render-screen';
import screenLevelGenre from './screen--level-genre';

const template = `
<section class="main main--level main--level-artist">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle cx="390" cy="390" r="370" class="timer-line" style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
  </svg>

  <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
    <span class="timer-value-mins">02</span><!--
    --><span class="timer-value-dots">:</span><!--
    --><span class="timer-value-secs">00</span>
  </div>

  <div class="main-wrap">
    <div class="main-timer"></div>

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
  renderScreen(screenLevelGenre);
};

for (const answer of answerCollection) {
  answer.addEventListener(`click`, onClickaAnswer);
}

export default screenLevelArtist;