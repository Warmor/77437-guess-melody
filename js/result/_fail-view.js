import View from '../view';

export default class ViewResultFail extends View {
  get template() {
    return `
      <section class="main main--result main--result-fail">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

        <h2 class="title">Вы проиграли</h2>
        <div class="main-stat">Ничего, вам повезет в следующий раз</div>
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`;
  }

  bind() {
    this.replayButton = this.element.querySelector(`.main-replay`);
    this.replayButton.addEventListener(`click`, this.onClickReplay);
  }

  onClickReplay() {}

}
