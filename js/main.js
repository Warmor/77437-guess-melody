import Welcome from './welcome/welcome';
import Game from './game/game';
import Result from './result/result';

const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULT: `result`,
};

const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {}

  static changeController(url = ``) {
    const route = url.split(`;`)
    switch(route[0]) {
      case ControllerID.GAME:
        Game.init();
        break
      case ControllerID.RESULT:
        Result.init(atob(route[1]),atob(route[2]),atob(route[3]));
        break
      default:
        Welcome.init();
        break
    }
  }

  static showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  static showGame() {
    location.hash = ControllerID.GAME;
  }

  static showResult(lives, time, score) {
    location.hash = `${ControllerID.RESULT};${btoa(lives)};${btoa(time)};${btoa(score)}`;
  }

  static init() {
    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
    this.changeController(getControllerIDFromHash(location.hash));
  }
}
App.init();

export default App;
