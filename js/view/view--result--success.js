import View from './view';

export default class ViewResultSuccess extends View {
  constructor(totalScore, percentage) {
    super();
    this.totalScore = totalScore;
    this.percentage = percentage;
  }
  get template() {
    return `
      <section class="main main--result main--result-success">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <h2 class="title">Вы настоящий меломан!</h2>
        <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${this.totalScore}&nbsp;мелодии</div>
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
