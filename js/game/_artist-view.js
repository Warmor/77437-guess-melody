import View from '../view';
import initializePlayer from '../player/player.js';

export default class ViewLevelArtist extends View {
  constructor(questionData) {
    super();
    this.title = questionData.title;
    this.src = questionData.src;
    this.answers = questionData.answers;
    questionData.answers.forEach((answer) => {
      if (answer.isCorrect) {
        this.trueAnswerID = answer.id;
      }
    });
  }

  get template() {
    return `
      <section class="main main--level main--level-artist">
        <div class="main-wrap">
          <h2 class="title main-title">${this.title}</h2>
          <div class="player-wrapper">${this.trueAnswerID}</div>
          <form class="main-list">
            ${this.answers.map((answer) => this.templateAnswer(answer)).join(``)}
          </form>
        </div>
      </section>`;
  }

  templateAnswer(answer) {
    return `
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="${answer.id}" name="answer" value="${answer.id}" />
        <label class="main-answer" for="${answer.id}">
          <img class="main-answer-preview" src="${answer.image.url}">
          ${answer.title}
          ${answer.id}
        </label>
      </div>`;
  }

  checkAnswer(element) {
    const answerID = element.id;
    const currentID = this.trueAnswerID;
    if (answerID === currentID) {
      return true;
    } else {
      return false;
    }
  }

  bind() {
    this.answerCollection = this.element.querySelectorAll(`.main-answer-r`);
    this.playerWrapper = this.element.querySelector(`.player-wrapper`);

    initializePlayer(this.playerWrapper, this.src, false);

    for (const answer of this.answerCollection) {
      answer.addEventListener(`change`, (event) => {
        event.preventDefault();
        this.onAnswer(event);
      });
    }
  }

  onAnswer() {}
}
