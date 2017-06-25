import View from '../view';

export default class ViewLevelArtist extends View {
  constructor(screenData) {
    super();
    this.songs = screenData.songs;
    this.trueSong = screenData.trueSong;
  }

  get template() {
    return `
      <section class="main main--level main--level-artist">
        <div class="main-wrap">
          <h2 class="title main-title">Кто исполняет эту песню?</h2>
          <div class="player-wrapper">${this.trueSong.filePath}</div>
          <form class="main-list">
            ${this.songs.map((answer) => this.templateAnswer(answer)).join(``)}
          </form>
        </div>
      </section>`;
  }

  templateAnswer(answer) {
    return `
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="${answer.id}" name="answer" value="${answer.value}" />
        <label class="main-answer" for="${answer.id}">
          <img class="main-answer-preview" src="${answer.imgPath}">
          ${answer.name}
        </label>
      </div>`;
  }

  checkAnswer(element) {
    const answerID = element.id;
    const currentID = this.trueSong.id;
    if (answerID === currentID) {
      return true;
    } else {
      return false;
    }
  }

  bind() {

    this.answerCollection = this.element.querySelectorAll(`.main-answer-r`);

    for (const answer of this.answerCollection) {
      answer.addEventListener(`change`, (event) => {this.onAnswer(event)});
    }
  }

  onAnswer() {}
}
