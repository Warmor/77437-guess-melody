import View from '../view';

export default class ViewResultSuccess extends View {
  constructor(trueAnswers, percentage, score) {
    super();
    this.trueAnswers = trueAnswers;
    this.percentage = percentage;
    this.score = score;
  }
  get template() {
    return `
      <section class="main main--result main--result-success">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${this.trueAnswers}&nbsp;мелодии<br> и набрати ${this.score}&nbsp;очов</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.percentage}%&nbsp;игроков</span>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`;
  }

  bind() {
    this.replayButton = this.element.querySelector(`.main-replay`);
    this.replayButton.addEventListener(`click`, this.onClickReplay);
  }

  onClickReplay() {}
}
