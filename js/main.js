import Welcome from './welcome/welcome';
import Game from './game/game';
import Result from './result/result';

class App {
  constructor() {}

  static showWelcome() {
    Welcome.init();
  }

  static showGame() {
    Game.init();
  }

  static showResult() {
    Result.init();
  }

  static init() {
    this.showWelcome();
  }
}

App.init();

export default App;
