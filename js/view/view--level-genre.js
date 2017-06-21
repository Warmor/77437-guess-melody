import View from './view';

export default class ViewLevelGenre extends View {
  constructor(songs, trueSong) {
    super();
    this.songs = songs;
    this.trueSong = trueSong;
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        <div class="main-wrap">
          <h2 class="title main-title">Выберите трек(и) в "${this.trueSong.genre}" стиле</h2>
          <form class="genre">
            ${this.songs.map((song) => this.templateAnswer(song)).join(``)}
            <button class="genre-answer-send" type="submit" disabled>Ответить</button>
          </form>
        </div>
      </section>`;
  }

  templateAnswer(song) {
    return `
      <div class="genre-answer">
        <div class="player-wrapper">${song.genre}</div>
        <input type="checkbox" name="answer" value="${song.value}" id="${song.id}">
        <label class="genre-answer-check" for="${song.id}"></label>
      </div>`;
  }

  bind() {
    this.submitButtom = this.element.querySelector(`.genre-answer-send`);
    this.checkboxCollection = this.element.querySelectorAll(`input[type="checkbox"]`);

    for (const checkbox of this.checkboxCollection) {
      checkbox.addEventListener(`change`, this.setStateSubmitButtom);
    }

    this.submitButtom.addEventListener(`click`, this.onClickSendButton);
  }

  onClickSendButton() {}
  setStateSubmitButtom() {}
}
