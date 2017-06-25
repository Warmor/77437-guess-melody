import View from '../view';

export default class ViewLevelGenre extends View {
  constructor(screenData) {
    super();
    this.songs = screenData.songs;
    this.trueSong = screenData.trueSong;
    this.curentAnswers = this.songs.map(function (song) {
      return song.genre === screenData.trueSong.genre;
    });
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        <div class="main-wrap">
          <h2 class="title main-title">Выберите трек(и) в "${this.trueSong.genre}" стиле</h2>
          <form class="genre">
            ${this.songs.map((song) => this.templateAnswer(song)).join(``)}
            <button class="genre-answer-send" type="send" disabled>Ответить</button>
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

  checkAnswer() {
    let valid = false;
    for (let i = 0; i < this.checkboxCollection.length; i++) {
      if (this.checkboxCollection[i].checked === this.curentAnswers[i]) {
        valid = true;
      } else {
        valid = false;
        break;
      }
    }
    return valid;
  }

  setStateSendButton() {
    let anyCheckboxChecked = false;
    for (const checkbox of this.checkboxCollection) {
      if (checkbox.checked) {
        anyCheckboxChecked = true;
        break;
      }
    }
    this.sendButton.disabled = !anyCheckboxChecked;
  }

  bind() {
    this.sendButton = this.element.querySelector(`.genre-answer-send`);
    this.checkboxCollection = this.element.querySelectorAll(`input[type="checkbox"]`);

    for (const checkbox of this.checkboxCollection) {
      checkbox.addEventListener(`change`, this.setStateSendButton.bind(this));
    }

    this.sendButton.addEventListener(`click`, (event) => {
      this.onAnswer(event);
    });
  }

  onAnswer() {}
}
