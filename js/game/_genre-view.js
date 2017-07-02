import View from '../view';
import initializePlayer from '../player/player.js';

export default class ViewLevelGenre extends View {
  constructor(questionData) {
    super();
    this.title = questionData.title;
    this.answers = questionData.answers;
    this.curentAnswers = this.answers.map(function (answer) {
      return answer.genre === questionData.genre;
    });
  }

  get template() {
    return `
      <section class="main main--level main--level-genre">
        <div class="main-wrap">
          <h2 class="title main-title">"${this.title}"</h2>
          <form class="genre">
            ${this.answers.map(this.templateAnswer).join(``)}
            <button class="genre-answer-send" type="send" disabled>Ответить</button>
          </form>
        </div>
      </section>`;
  }

  templateAnswer(answer) {
    return `
      <div class="genre-answer">
        <div class="player-wrapper" data-src="${answer.src}"></div>
        <input type="checkbox" name="answer" value="${answer.id}" id="${answer.id}">
        <label class="genre-answer-check" for="${answer.id}"></label>
      </div>`;
  }

  checkAnswer() {
    let valid = false;
    for (const [index, checkbox] of this.checkboxCollection.entries()) {
      if (checkbox.checked === this.curentAnswers[index]) {
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
    this.playerWrappers = this.element.querySelectorAll(`.player-wrapper`);
    this.setStateSendButton = this.setStateSendButton.bind(this);

    this.playerWrappers.forEach((player, index) =>{
      player.destroyPlayer = initializePlayer(player, player.dataset.src, false);
    });

    this.sendButton.addEventListener(`click`, this.onAnswer);

    for (const checkbox of this.checkboxCollection) {
      checkbox.addEventListener(`change`, this.setStateSendButton);
    }
  }

  unbind() {
    this.playerWrappers.forEach((player) =>{
      player.destroyPlayer();
    });
    for (const checkbox of this.checkboxCollection) {
      checkbox.removeEventListener(`change`, this.setStateSendButton);
    }
    this.sendButton.removeEventListener(`click`, this.onAnswer);
  }

  onAnswer() {}
}
