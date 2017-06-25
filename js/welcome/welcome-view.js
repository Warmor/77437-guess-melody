import View from '../view';

export default class ViewWelcome extends View {

  get template() {
    return `
      <section class="main main--welcome">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
        <button class="main-play">Начать игру</button>
        <h2 class="title main-title">Правила игры</h2>
        <p class="text main-text">
          Правила просты&nbsp;— за&nbsp;2 минуты дать
          максимальное количество правильных ответов.<br>
          Удачи!
        </p>
      </section>`;
  }

  bind() {
    this.playGameButton = this.element.querySelector(`.main-play`);
    this.playGameButton.addEventListener(`click`, this.onPlayClick);
  }

  onPlayClick() {}
}
